/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/components/tailwind/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
