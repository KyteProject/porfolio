import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'Theme';
import { Container, Button } from 'Common';
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';
import dev from 'Static/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';
import ThemeContext from './../../../context/ThemeContext';

const Intro = () => {
	const { mode, toggle } = useContext(ThemeContext);

	console.log(mode);

	return (
		<Wrapper>
			<Header />
			<IntroWrapper as={Container}>
				<Details>
					<h1>Welcome / Welkom!</h1>
					<h4>I’m Dan and I’m a Problem Solver, Developer, and Designer!</h4>
					<Button as={AnchorLink} href="#contact">
						Hire me
					</Button>
					<Button onClick={() => toggle()}>
						{mode === 'dark' ? <Moon className="icon active" /> : <Sun className="icon active" />}
					</Button>
				</Details>
				<Thumbnail>
					<img src={dev} alt="I’m Dan and I’m a Problem Solver, Developer, and Designer!" />
				</Thumbnail>
			</IntroWrapper>
		</Wrapper>
	);
};

export { Intro };
