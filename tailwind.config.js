/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mThin: ["MuseoModerno-Thin", "sans-serif"],
        mExtraLight: ["MuseoModerno-ExtraLight", "sans-serif"],
        mLight: ["MuseoModerno-Light", "sans-serif"],
        mMedium: ["MuseoModerno-Medium", "sans-serif"],
        mRegular: ["MuseoModerno-Regular", "sans-serif"],
        mSemiBold: ["MuseoModerno-SemiBold", "sans-serif"],
        mBold: ["MuseoModerno-Bold", "sans-serif"],
        mExtraBold: ["MuseoModerno-ExtraBold", "sans-serif"],
        mBlack: ["MuseoModerno-Black", "sans-serif"],
        aPro: ["Abel-Pro", "sans-serif"],
        aProBold: ["Abel-Pro-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
