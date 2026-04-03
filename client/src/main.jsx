import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import './index.css'
import App from './App.jsx'

const smoothEase = [0.25, 0.1, 0.25, 1]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user" transition={{ duration: 0.5, ease: smoothEase }}>
      <App />
    </MotionConfig>
  </StrictMode>,
)
