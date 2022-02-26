const darkTheme = require('../colors.json');

console.log(darkTheme)

module.exports = function({addUtilities}) {
    addUtilities({
        'html': {
            color: darkTheme.fontColor.slice(6,-1),
            fontWeight: '500'
        }
    })
}