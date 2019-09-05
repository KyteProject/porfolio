import React, { useState, useLayoutEffect } from 'react';
import { langData } from './langData';

const LangContext = React.createContext({
	lang: '',
	currentLangData: {},
	langToggle: () => {},
});

export default LangContext;

export const LangProvider = ({ children }) => {
	const navLang = window.navigator.language.includes('nl') ? 'nl' : 'en';

	const [lang, setLang] = useState(window.localStorage.getItem('UILang') || navLang);

	useLayoutEffect(() => {
		const selectedLang = window.localStorage.getItem('UILang');

		if (selectedLang) {
			setLang(selectedLang);
		}
	}, [lang]);

	const langToggle = () => {
		const langState = lang === 'en' ? `nl` : `en`;

		setLang(langState);
		window.localStorage.setItem('UILang', langState);
	};

	return (
		<LangContext.Provider
			value={{
				lang,
				langToggle,
				currentLangData: langData[lang],
			}}
		>
			{children}
		</LangContext.Provider>
	);
};
