import React from 'react';
import { MyThemeProvider } from './src/context/ThemeContext';

export const wrapRootElement = ({ element }) => <MyThemeProvider>{element}</MyThemeProvider>;

export const onServiceWorkerUpdateReady = () => window.location.reload(true);
