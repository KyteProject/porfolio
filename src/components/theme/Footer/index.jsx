import React, { useContext } from 'react';
import { Container } from 'Common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';
import LangContext from './../../../context/LangContext';

export const Footer = () => {
	const { currentLangData } = useContext(LangContext);
	const { copy } = currentLangData.footer;

	return (
		<Wrapper>
			<Flex as={Container}>
				<Details>
					<h2>Daniel Smith</h2>
					<span>
						{copy} | {new Date().getFullYear()}
					</span>
				</Details>
				<Links>
					{social.map(({ id, name, link, icon }) => (
						<a
							key={id}
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`follow me on ${icon}`}
						>
							<img width="24" src={icon} alt={name} />
						</a>
					))}
				</Links>
			</Flex>
		</Wrapper>
	);
};
