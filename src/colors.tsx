import tokens from './colors.json'

const parseToken = JSON.stringify(tokens);

export const darkTheme: Record<string, string> = JSON.parse(parseToken);