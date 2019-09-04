import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
	light: '#fff',
	dark: '#222',
});

export const textColor = theme('mode', {
	light: '#000',
	dark: '#fff',
});

export const buttonBackgroundColor = theme('mode', {
	light: '#222',
	dark: '#eee',
});

export const buttonTextColor = theme('mode', {
	light: 'white',
	dark: 'black',
});
