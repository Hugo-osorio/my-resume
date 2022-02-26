import { createTheme } from '@mui/material/styles';
import { darkTheme } from './colors';

const darkThemeValues = Object.values(darkTheme);
const darkThemeKeys = Object.keys(darkTheme);
const parseDarkTheme = {...darkTheme}
darkThemeValues.forEach((value, index)=>{
    parseDarkTheme[darkThemeKeys[index]] = value.slice(4, -1);
})

export const theme = createTheme({
    palette: {
        primary: {
            main: parseDarkTheme.quaternary
        },

    }
})