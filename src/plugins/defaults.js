const darkTheme = require('../colors.json');

module.exports = function({addUtilities}) {
    addUtilities({
        'html': {
            color: darkTheme.fontColor.slice(6,-1),
            fontWeight: '500'
        }
    })
}