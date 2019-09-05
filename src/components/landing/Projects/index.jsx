import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from 'Common';
import starIcon from 'Static/icons/star.svg';
import forkIcon from 'Static/icons/fork.svg';
import { Wrapper, Grid, Item, Content, Stats } from './styles';
import LangContext from './../../../context/LangContext';

export const Projects = () => {
	const {
		github: {
			repositoryOwner: {
				repositories: { edges },
			},
		},
	} = useStaticQuery(graphql`
		{
			github {
				repositoryOwner(login: "kyteproject") {
					repositories(first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
						edges {
							node {
								id
								name
								url
								description
								stargazers {
									totalCount
								}
								forkCount
							}
						}
					}
				}
			}
		}
	`);

	const { currentLangData } = useContext(LangContext);
	const { title, subTitle } = currentLangData.projects;

	return (
		<Wrapper as={Container} id="projects">
			<h2>{title}</h2>
			<h4>{subTitle}</h4>
			<Grid>
				{edges.map(({ node }) => (
					<Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer">
						<Card>
							<Content>
								<h4>{node.name}</h4>
								<p>{node.description}</p>
							</Content>
							<Stats>
								<div>
									<img src={starIcon} alt="stars" />
									<span>{node.stargazers.totalCount}</span>
								</div>
								<div>
									<img src={forkIcon} alt="forks" />
									<span>{node.forkCount}</span>
								</div>
							</Stats>
						</Card>
					</Item>
				))}
			</Grid>
		</Wrapper>
	);
};
