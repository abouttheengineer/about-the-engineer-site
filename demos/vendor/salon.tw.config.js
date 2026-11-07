module.exports = Object.assign({content: [require('path').join(__dirname, '..', 'salon.html')]}, {
            theme: {
                extend: {
                    colors: {
                        salon: {
                            bg: '#FAF9F7', // ソフトベージュ
                            surface: '#FFFFFF',
                            text: '#4A4443', // ウォームグレー（濃）
                            subtext: '#8F8988', // ウォームグレー（淡）
                            accent: '#D4A373', // 落ち着いたゴールド
                            rose: '#E8C7C8', // くすみピンク
                            rosestrong: '#D98A92',
                        }
                    },
                    fontFamily: {
                        sans: ['Meiryo','"Hiragino Kaku Gothic ProN"','"Hiragino Sans"','"Noto Sans JP"','sans-serif'],
                        serif: ['Georgia','"Hiragino Mincho ProN"','"Yu Mincho"','serif'],
                    }
                }
            }
        });
