import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'Theme';
import { Container, Button } from 'Common';
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';
import dev from 'Static/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import ThemeContext from './../../../context/ThemeContext';
import LangContext from './../../../context/LangContext';

const Intro = () => {
	const { mode, toggle } = useContext(ThemeContext);
	const { lang, currentLangData, langToggle } = useContext(LangContext);
	const { title, subTitle, button, imageAlt } = currentLangData.intro;

	return (
		<Wrapper>
			<Header />
			<IntroWrapper as={Container}>
				<Details>
					<h1>{title}</h1>
					<h4>{subTitle}</h4>
					<Button as={AnchorLink} href="#contact">
						{button}
					</Button>
					<Button onClick={() => toggle()}>
						{mode === 'dark' ? <Moon className="icon active" /> : <Sun className="icon active" />}
					</Button>
					<Button onClick={() => langToggle()}>{lang === 'en' ? 'EN' : 'NL'}</Button>
				</Details>
				<Thumbnail>
					<img src={dev} alt={imageAlt} />
				</Thumbnail>
			</IntroWrapper>
		</Wrapper>
	);
};

export { Intro };
