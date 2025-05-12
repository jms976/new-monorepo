// // packages/config/tailwind.base.ts
// import type { Config } from 'tailwindcss';

// const Config: Config = {
//   darkMode: 'class',
//   content: [],
//   theme: {
//     extend: {
//       colors: {
//         test: '#1E40AF',
//       },
//     },
//   },
//   plugins: [],
// };

// export default Config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [], // 개별 앱에서 설정해야 함
  theme: {
    extend: {
      colors: {
        aaa: '#1E40AF',
      },
    },
  },
  plugins: [],
};
