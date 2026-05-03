/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        /** Warm section alt — PRD / premium palette */
        paper: '#fafafa',
        warm: '#f7f4ef',
        surface: '#ffffff',
        muted: '#525252',
        muted2: '#4b5563',
        line: '#e5e7eb',
        accent: '#1e3a8a',
        accentTeal: '#0f766e',
        aiSoft: '#eef2ff',
        successSoft: '#e7f5ef',
        /** Semantic — chaos / risk badges (DS v1.1, ne Tailwind default red-*) */
        dangerSoft: '#fef2f2',
        danger: '#b91c1c',
        /** Hero diagram SVG — sinchronizuota su theme (žr. global.css :root) */
        diagramStrokeAi: '#c7d2fe',
        diagramLineSoft: '#9ca3af',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        /** 11px — badge / micro etiketės */
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      maxWidth: {
        measure: '65ch',
        /** PRD content width ~1180px */
        content: '1180px',
      },
      boxShadow: {
        soft: '0 24px 48px -12px rgba(10, 10, 10, 0.06)',
        softSm: '0 8px 24px -8px rgba(10, 10, 10, 0.08)',
        /** Dropdown / elevated panels — tarp softSm ir generic lg */
        elevated: '0 12px 32px -8px rgba(10, 10, 10, 0.12)',
      },
      backgroundImage: {
        'hero-premium':
          'linear-gradient(135deg, #f7f4ef 0%, #ffffff 45%, #eef2ff 100%)',
        /** Hero diagram wrapper — accent / 6% */
        'diagram-radial':
          'radial-gradient(circle at 30% 15%, rgb(30 58 138 / 0.06), transparent 55%)',
      },
    },
  },
  plugins: [],
};
