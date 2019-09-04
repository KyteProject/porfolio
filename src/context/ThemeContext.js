import React, { createContext, useState, useLayoutEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { backgroundColor, textColor } from './theme';

const ThemeContext = createContext({
	mode: 'light',
	toggle: () => {},
});

export default ThemeContext;

export const useTheme = () => React.useContext(ThemeContext);

export const MyThemeProvider = ({ children }) => {
	const [mode, setMode] = useState(window.localStorage.getItem('themeMode'));

	useLayoutEffect(() => {
		const lastTheme = window.localStorage.getItem('themeMode');

		if (lastTheme === 'dark') {
			setMode('dark');
		}

		if (!lastTheme || lastTheme === 'false') {
			setMode('light');
		}
	}, [mode]);

	const toggle = () => {
		const themeState = mode === 'light' ? `dark` : `light`;

		setMode(themeState);
		window.localStorage.setItem('themeMode', themeState);
	};

	const Wrapper = styled.div`
		background-color: ${backgroundColor};
		color: ${textColor};
	`;

	return (
		<ThemeContext.Provider value={{ mode, toggle }}>
			<ThemeProvider theme={{ mode }}>
				<Wrapper>{children}</Wrapper>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};
