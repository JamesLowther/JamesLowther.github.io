// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      opacity: {
        35: "0.35",
        45: "0.45",
        65: "0.65",
        95: "0.95",
      },
      keyframes: {
        slowpulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.6 },
        },
      },
      animation: {
        slowpulse: "slowpulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
    scale: {
      103: "1.03",
      105: "1.05",
    },
  },
  purge: {
    enabled: false,
  },
};
