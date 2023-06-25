// tailwind.config.js
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      opacity: {
        35: "0.35",
        45: "0.45",
        65: "0.65",
        95: "0.95",
      },
      translate: {
        88: "20.6rem",
      },
      keyframes: {
        slowpulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.6 },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.1 },
        },
      },
      animation: {
        slowpulse: "slowpulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blink: "blink 1.3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
    scale: {
      103: "1.03",
      105: "1.05",
    },
  },
};
