module.exports = Object.assign({content: [require('path').join(__dirname, '..', 'sns.html')]}, {
            theme: {
                extend: {
                    colors: {
                        navy: { DEFAULT: '#1E3A5F', soft: '#EAF1F7', mid: '#BFD0E3' }
                    },
                    fontFamily: {
                        sans: ['Meiryo','"Hiragino Kaku Gothic ProN"','"Hiragino Sans"','"Noto Sans JP"','sans-serif'],
                    }
                }
            }
        });
