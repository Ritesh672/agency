import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const BRAND_EMAIL = 'brandteam@zivonx.com';

/** 9:00–19:00 (7 PM), every 30 minutes — works reliably across browsers vs. native time input. */
const SESSION_TIME_SLOTS = (() => {
  const slots = [];
  for (let totalMin = 9 * 60; totalMin <= 19 * 60; totalMin += 30) {
    const h = Math.floor(totalMin / 60);
    const m = totalMin % 60;
    slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
  }
  return slots;
})();

function formatTimeSlot(isoTime) {
  const d = new Date(`2000-01-01T${isoTime}:00`);
  return d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
}

const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${encodeURIComponent(BRAND_EMAIL)}`;

/** Client-side throttling (per browser). FormSubmit also applies server checks + optional reCAPTCHA. */
const FORM_ATTEMPT_COOLDOWN_MS = 45_000;
const FORM_SUCCESS_COOLDOWN_MS = 5 * 60_000;
const STORAGE_ATTEMPT = 'zivonx_contact_attempt_at';
const STORAGE_SUCCESS = 'zivonx_contact_success_at';

const SLOT_SET = new Set(SESSION_TIME_SLOTS);

function sanitizePlainText(value, maxLen) {
  if (value == null) return '';
  return String(value)
    .replace(/<[^>]*>/g, '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim()
    .slice(0, maxLen);
}

function sanitizePhone(value, maxLen = 36) {
  return sanitizePlainText(value, maxLen).replace(/[^\d+\s().-]/g, '');
}

function isReasonableEmail(email) {
  if (!email || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

const CharReveal = ({ text, delay = 0 }) => (
  <motion.p
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2, margin: '0px 0px -8% 0px' }}
    className="text-gold text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] font-medium uppercase mb-5 sm:mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 max-w-full"
  >
    <span className="h-[1px] w-6 flex-shrink-0 bg-gold sm:w-8" />
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        variants={{
          hidden: { opacity: 0, y: 6 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.28, delay: delay + i * 0.03 } },
        }}
        className="inline-block"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </motion.p>
);

const labelClass =
  'mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400';

const pickerShell =
  'group relative flex min-h-[52px] w-full cursor-pointer items-center gap-3 rounded-sm border border-white/12 bg-dark-card/80 px-4 py-3 text-left transition-[border-color,box-shadow] duration-300 hover:border-gold/35 focus-visible:border-gold/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/30';

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

function toISODate(y, m0, d) {
  return `${y}-${String(m0 + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

/** Custom month grid — no native date input (avoids mobile / overlay bugs). */
function CalendarDropdown({
  value,
  minDateStr,
  onChange,
  isOpen,
  onToggle,
  onClose,
  triggerClass,
}) {
  const wrapRef = useRef(null);
  const [cursor, setCursor] = useState(() => {
    if (value) {
      const [y, m] = value.split('-').map(Number);
      return { y, m: m - 1 };
    }
    const n = new Date();
    return { y: n.getFullYear(), m: n.getMonth() };
  });

  const min = useMemo(() => {
    const d = new Date(`${minDateStr}T00:00:00`);
    d.setHours(0, 0, 0, 0);
    return d;
  }, [minDateStr]);

  useEffect(() => {
    if (!isOpen) return;
    if (value) {
      const [y, m] = value.split('-').map(Number);
      setCursor({ y, m: m - 1 });
    }
  }, [isOpen, value]);

  useEffect(() => {
    if (!isOpen) return;
    const onDoc = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) onClose();
    };
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  const cells = useMemo(() => {
    const first = new Date(cursor.y, cursor.m, 1);
    const lastDate = new Date(cursor.y, cursor.m + 1, 0).getDate();
    const pad = (first.getDay() + 6) % 7;
    const list = [];
    for (let i = 0; i < pad; i++) list.push({ kind: 'pad' });
    for (let d = 1; d <= lastDate; d++) {
      const dt = new Date(cursor.y, cursor.m, d);
      dt.setHours(0, 0, 0, 0);
      list.push({
        kind: 'day',
        d,
        disabled: dt < min,
        selected: value === toISODate(cursor.y, cursor.m, d),
      });
    }
    return list;
  }, [cursor, min, value]);

  const firstOfView = new Date(cursor.y, cursor.m, 1);
  const firstOfMin = new Date(min.getFullYear(), min.getMonth(), 1);
  const canPrev = firstOfView > firstOfMin;

  const header = firstOfView.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });

  const goPrev = () => {
    if (!canPrev) return;
    setCursor((c) => {
      let { y, m } = c;
      m -= 1;
      if (m < 0) {
        m = 11;
        y -= 1;
      }
      return { y, m };
    });
  };

  const goNext = () => {
    setCursor((c) => {
      let { y, m } = c;
      m += 1;
      if (m > 11) {
        m = 0;
        y += 1;
      }
      return { y, m };
    });
  };

  return (
    <div className="relative" ref={wrapRef}>
      <button
        type="button"
        onClick={onToggle}
        className={triggerClass}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <Calendar className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden />
        <span className="min-w-0 flex-1 truncate text-left font-light">
          {value
            ? new Date(`${value}T12:00:00`).toLocaleDateString(undefined, {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })
            : 'Choose a date'}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-label="Choose session date"
          className="absolute left-0 top-full z-[100] mt-2 w-full max-w-[320px] rounded-sm border border-white/12 bg-[#141414] p-4 shadow-[0_24px_48px_rgba(0,0,0,0.65)] ring-1 ring-gold/15"
        >
          <div className="mb-4 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={goPrev}
              disabled={!canPrev}
              className="rounded-sm p-2 text-gold transition-colors hover:bg-white/5 disabled:pointer-events-none disabled:opacity-25"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <span className="font-display text-base font-medium tracking-wide text-white">{header}</span>
            <button
              type="button"
              onClick={goNext}
              className="rounded-sm p-2 text-gold transition-colors hover:bg-white/5"
              aria-label="Next month"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="mb-2 grid grid-cols-7 gap-1 text-center">
            {WEEKDAYS.map((w) => (
              <span key={w} className="text-[10px] font-bold uppercase tracking-wider text-gray-600">
                {w}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {cells.map((cell, i) => {
              if (cell.kind === 'pad') return <span key={`p-${i}`} className="aspect-square" />;
              const { d, disabled, selected } = cell;
              return (
                <button
                  key={d}
                  type="button"
                  disabled={disabled}
                  onClick={() => {
                    onChange(toISODate(cursor.y, cursor.m, d));
                    onClose();
                  }}
                  className={`aspect-square rounded-sm text-sm font-light transition-colors ${
                    selected
                      ? 'bg-gold font-medium text-black'
                      : disabled
                        ? 'cursor-not-allowed text-gray-700'
                        : 'text-gray-300 hover:bg-gold/15 hover:text-gold-light'
                  }`}
                >
                  {d}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const timePanelClass =
  'absolute left-0 top-full z-[100] mt-2 w-full max-w-[320px] rounded-sm border border-white/12 bg-[#141414] p-3 shadow-[0_24px_48px_rgba(0,0,0,0.65)] ring-1 ring-gold/15';

function TimeDropdown({ value, onChange, isOpen, onToggle, onClose, triggerClass }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const onDoc = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) onClose();
    };
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  return (
    <div className="relative" ref={wrapRef}>
      <button
        type="button"
        onClick={onToggle}
        className={triggerClass}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Clock className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden />
        <span className={`min-w-0 flex-1 truncate text-left font-light ${value ? 'text-white' : 'text-gray-500'}`}>
          {value ? formatTimeSlot(value) : 'Choose a time'}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>

      {isOpen && (
        <div role="listbox" aria-label="Choose session time" className={timePanelClass}>
          <p className="mb-2 border-b border-white/5 px-1 pb-2 font-display text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
            9:00 AM – 7:00 PM · your time
          </p>
          <div className="grid max-h-[min(50vh,260px)] grid-cols-2 gap-1.5 overflow-y-auto pr-0.5 sm:max-h-[280px]">
            {SESSION_TIME_SLOTS.map((slot) => {
              const selected = value === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(slot);
                    onClose();
                  }}
                  className={`rounded-sm px-2.5 py-2 text-center text-sm font-light transition-colors ${
                    selected
                      ? 'bg-gold font-medium text-black'
                      : 'text-gray-300 hover:bg-gold/15 hover:text-gold-light'
                  }`}
                >
                  {formatTimeSlot(slot)}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const Contact = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [bookingHint, setBookingHint] = useState(null);

  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setBookingHint(null);
    if (!date || !time) {
      setBookingHint('Please choose both a date and a time slot before submitting.');
      return;
    }
    const fd = new FormData(e.target);

    // Honeypot: FormSubmit ignores submissions when _honey is non-empty; bots often fill hidden fields.
    const honey = fd.get('_honey')?.toString().trim();
    if (honey) {
      return;
    }

    const name = sanitizePlainText(fd.get('name'), 120);
    const email = sanitizePlainText(fd.get('email'), 254).toLowerCase();
    const whatsapp = sanitizePhone(fd.get('whatsapp'));
    const session_date = fd.get('session_date')?.toString().trim() ?? '';
    const session_time = fd.get('session_time')?.toString().trim() ?? '';

    if (!name || name.length < 2) {
      setBookingHint('Please enter your full name.');
      return;
    }
    if (!isReasonableEmail(email)) {
      setBookingHint('Please enter a valid email address.');
      return;
    }
    if (!whatsapp || whatsapp.replace(/\D/g, '').length < 8) {
      setBookingHint('Please enter a valid WhatsApp number.');
      return;
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(session_date) || session_date < minDate) {
      setBookingHint('Please choose a valid date.');
      return;
    }
    if (!SLOT_SET.has(session_time)) {
      setBookingHint('Please choose a valid time slot.');
      return;
    }

    const now = Date.now();
    const lastSuccess = Number(sessionStorage.getItem(STORAGE_SUCCESS) || '0');
    if (lastSuccess && now - lastSuccess < FORM_SUCCESS_COOLDOWN_MS) {
      setBookingHint(
        'You recently submitted a booking. Please wait a few minutes before sending another request.'
      );
      return;
    }
    const lastAttempt = Number(sessionStorage.getItem(STORAGE_ATTEMPT) || '0');
    if (lastAttempt && now - lastAttempt < FORM_ATTEMPT_COOLDOWN_MS) {
      setBookingHint('Please wait a moment before submitting again.');
      return;
    }
    sessionStorage.setItem(STORAGE_ATTEMPT, String(now));

    const payload = {
      _subject: 'Session booking — Zivonx',
      _template: 'table',
      _replyto: email,
      _honey: '',
      name,
      email,
      whatsapp,
      session_date,
      session_time,
      preferred_slot: `${session_date} at ${session_time}`,
    };

    setIsSubmitting(true);
    let delivered = false;
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      delivered = res.ok;
    } catch {
      delivered = false;
    } finally {
      setIsSubmitting(false);
    }

    if (delivered) {
      sessionStorage.setItem(STORAGE_SUCCESS, String(Date.now()));
      setIsSubmitted(true);
    } else {
      setSubmitError(
        `We could not confirm the email to ${BRAND_EMAIL}. Use the link below or WhatsApp.`
      );
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-b border-white/10 bg-dark-card py-16 sm:py-20 md:py-32 min-w-0 [color-scheme:dark]"
    >
      <div className="mx-auto grid min-w-0 max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 md:gap-16 md:px-12 lg:grid-cols-12 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2, margin: '0px 0px -8% 0px' }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:col-span-5"
        >
          <CharReveal text="Book a Session" delay={0.08} />
          <h2 className="mb-4 font-display text-3xl font-medium leading-[1.12] text-white sm:text-4xl lg:text-5xl break-words">
            Pick a time that works for you.
          </h2>
          <p className="mb-6 max-w-md font-light text-base leading-relaxed text-gray-400 sm:text-lg">
            Share your details and preferred slot. We will confirm by email and follow up on WhatsApp if needed.
          </p>
          <p className="mb-8 max-w-md text-sm font-light text-gray-500">
            Direct inbox:{' '}
            <a
              href={`mailto:${BRAND_EMAIL}?subject=Book%20a%20session`}
              className="text-gold underline-offset-2 transition-colors hover:text-gold-light hover:underline"
            >
              {BRAND_EMAIL}
            </a>
          </p>
          <ul className="space-y-4 border-l border-gold/25 pl-5 text-sm font-light text-gray-500">
            <li className="text-white/90">
              <span className="font-medium text-gold">30 min</span> strategy call
            </li>
            <li>No obligation — we map fit and next steps.</li>
            <li>Slots shown in your local time.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15, margin: '0px 0px -8% 0px' }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative min-w-0 lg:col-span-7"
        >
          <div className="absolute -inset-px rounded-sm bg-gradient-to-br from-gold/20 via-transparent to-gold/10 opacity-60 blur-sm" aria-hidden />
          <div className="relative overflow-visible rounded-sm border border-white/10 bg-dark-bg p-6 shadow-[0_0_0_1px_rgba(245,158,11,0.06)] sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/10 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-amber-600/10 blur-3xl" aria-hidden />

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-dark-bg/98 p-8 text-center backdrop-blur-sm"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-8 w-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="mb-2 font-display text-2xl text-white sm:text-3xl">You&apos;re booked in</h3>
                <p className="max-w-sm font-light text-gray-400">
                  We received your session request and will email you shortly at the address you provided.
                </p>
              </motion.div>
            )}

            <form id="contact-form" onSubmit={handleSubmit} className="relative z-10 space-y-6" noValidate>
              {/* Honeypot for bots — must stay empty (FormSubmit discards non-empty _honey). */}
              <div
                className="absolute -left-[10000px] top-0 h-px w-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="contact-honey">Do not fill</label>
                <input
                  id="contact-honey"
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  defaultValue=""
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="book-name" className={labelClass}>
                    Full name
                  </label>
                  <input
                    id="book-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full min-w-0 rounded-sm border border-white/12 bg-dark-card/50 px-4 py-3.5 font-light text-white placeholder:text-gray-600 transition-[border-color,box-shadow] focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/25"
                  />
                </div>
                <div>
                  <label htmlFor="book-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="book-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="w-full min-w-0 rounded-sm border border-white/12 bg-dark-card/50 px-4 py-3.5 font-light text-white placeholder:text-gray-600 transition-[border-color,box-shadow] focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/25"
                  />
                </div>
                <div>
                  <label htmlFor="book-whatsapp" className={labelClass}>
                    WhatsApp
                  </label>
                  <input
                    id="book-whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 00000 00000"
                    className="w-full min-w-0 rounded-sm border border-white/12 bg-dark-card/50 px-4 py-3.5 font-light text-white placeholder:text-gray-600 transition-[border-color,box-shadow] focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/25"
                  />
                </div>
              </div>

              <input type="hidden" name="session_date" value={date} />
              <input type="hidden" name="session_time" value={time} />

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <span className={labelClass}>Preferred date</span>
                  <CalendarDropdown
                    value={date}
                    minDateStr={minDate}
                    onChange={(v) => {
                      setDate(v);
                      setBookingHint(null);
                    }}
                    isOpen={calendarOpen}
                    onToggle={() => {
                      setCalendarOpen((o) => {
                        const next = !o;
                        if (next) setTimeOpen(false);
                        return next;
                      });
                    }}
                    onClose={() => setCalendarOpen(false)}
                    triggerClass={`${pickerShell} ${calendarOpen ? 'border-gold/45 ring-1 ring-gold/25' : ''}`}
                  />
                </div>
                <div>
                  <span className={labelClass}>Preferred time</span>
                  <TimeDropdown
                    value={time}
                    onChange={(v) => {
                      setTime(v);
                      setBookingHint(null);
                    }}
                    isOpen={timeOpen}
                    onToggle={() => {
                      setTimeOpen((o) => {
                        const next = !o;
                        if (next) setCalendarOpen(false);
                        return next;
                      });
                    }}
                    onClose={() => setTimeOpen(false)}
                    triggerClass={`${pickerShell} ${timeOpen ? 'border-gold/45 ring-1 ring-gold/25' : ''}`}
                  />
                </div>
              </div>

              {bookingHint && (
                <p className="rounded-sm border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100/90" role="status">
                  {bookingHint}
                </p>
              )}

              <p className="text-center text-xs font-light italic text-gray-600">
                Submissions are sent to {BRAND_EMAIL}. First-time setup may require confirming the inbox with FormSubmit.
              </p>

              {submitError && (
                <p className="rounded-sm border border-gold/35 bg-gold/10 px-4 py-3 text-sm text-gold-light/95" role="alert">
                  {submitError}{' '}
                  <a
                    href={`mailto:${BRAND_EMAIL}?subject=Session%20booking&body=Please%20book%20a%20session%20with%20me.`}
                    className="font-medium text-gold underline-offset-2 hover:underline"
                  >
                    Open email
                  </a>
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-sm border border-gold-dark/30 bg-gold py-4 text-base font-semibold text-black shadow-sm transition-[background-color,transform,opacity] hover:bg-gold-light focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg disabled:pointer-events-none disabled:opacity-55"
              >
                {isSubmitting ? 'Sending…' : 'Submit application'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
