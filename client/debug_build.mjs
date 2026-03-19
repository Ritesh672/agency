import { build } from 'vite';

build().catch((err) => {
  console.error("VITE BUILD ERROR DETAILS:");
  console.log(err.message);
  if (err.frame) console.log(err.frame);
  if (err.loc) console.log(err.loc);
  if (err.errors) console.log("Rollup errors:", err.errors);
  console.dir(err, { depth: null });
  process.exit(1);
});
