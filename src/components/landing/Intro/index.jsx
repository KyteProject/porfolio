import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'Theme';
import { Container, Button } from 'Common';
import dev from 'Static/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi There!</h1>
				<h4>I’m Dan and I’m a Problem Solver, Developer, and Designer!</h4>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m Dan and I’m a Problem Solver, Developer, and Designer!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
);
