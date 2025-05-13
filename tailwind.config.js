module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      extend: {
        fontSize: {
          14: '14px',
        },
         spacing: {
        '1.9': '0.50rem', // Since Tailwind's default spacing is based on a 4px scale, 1.8 would be 0.45rem (1.8 * 0.25rem)
      },
        rotate: {
          '135': '-45deg',
        },
        gap: {
          '11': '0.75rem',
        },
        backgroundColor: {
          'main-bg': '#4E5D97',
          'main-dark-bg': '#2d325c',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
          "background-light":'',
          "background-dark" :'pink'
  
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          450: '520px',
          550: '778px',
          300: '385px',
          570: '600px',
         68:'68px',
          
        },
        height: {
          80: '80px',
          70:'70px',
          100:'100%',
          50:'50%',
          15:'15%',
          40:'40%'
        },
       
        minHeight: {
          590: '590px',
          50:'50%',
          10:'10%',
          40:'40%'
        }, minWidth: {
        '8': '8px',
      },
      minHeight: {
        '65': '65px',
      },
        backgroundImage: {
          'hero-pattern':
            "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
        },
      },
    },
    plugins: [],
  };
  