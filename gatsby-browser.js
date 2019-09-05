import React from 'react';
import { MyThemeProvider } from './src/context/ThemeContext';
import { LangProvider } from './src/context/LangContext';

export const wrapRootElement = ({ element }) => (
	<LangProvider>
		<MyThemeProvider>{element}</MyThemeProvider>;
	</LangProvider>
);

export const onServiceWorkerUpdateReady = () => window.location.reload(true);
