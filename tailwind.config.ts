import type {Config} from 'tailwindcss';
const config:Config={content:['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],theme:{extend:{fontFamily:{sans:['var(--font-inter)','Arial','sans-serif'],display:['var(--font-playfair)','Georgia','serif']},colors:{ink:'#17261f',forest:'#183b2d',sage:'#a7b9a5',cream:'#f6f3ea',gold:'#c6a15b'}}},plugins:[]};
export default config;
