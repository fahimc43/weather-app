module.exports = {
  babel: {
    Plugin: ["babel-plugin-macros"],
  },
  style: {
    postcssOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
