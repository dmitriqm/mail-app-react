const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '1/2': '50%',
      }
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.btn': {
          paddingTop: '0.25rem',
          paddingBottom: '0.25rem',
          borderRadius: '0.75rem',
          width: '75%',
          transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke',
          transitionTimingFunction: 'ease-in',
          transitionDuration: '200ms'
        },
        '.folder-input': {
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem',
          width: '91%',
          height: '2rem',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          borderRadius: '0.75rem',
          outline: '2px solid transparent',
          outlineOffset: '2px',
          marginBottom: '0.25rem',
          backgroundColor: 'rgb(248 250 252)',
          '&:focus': {
            borderColor: 'rgb(132 204 22)',
            borderWidth: 1
          }
        },
      })
    },
    )
  ],
}