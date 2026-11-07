module.exports = Object.assign({content: [require('path').join(__dirname, '..', 'speakflow.html')]}, {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#f0fdfa',
                            100: '#ccfbf1',
                            500: '#14b8a6',
                            600: '#0d9488',
                            700: '#0f766e',
                            800: '#115e59',
                        },
                        accent: {
                            50: '#eff6ff',
                            500: '#3b82f6',
                            600: '#2563eb',
                            700: '#1d4ed8',
                        }
                    },
                    fontFamily: {
                        sans: ['Meiryo','"Hiragino Kaku Gothic ProN"','"Hiragino Sans"','"Noto Sans JP"','sans-serif'],
                    }
                }
            }
        });
