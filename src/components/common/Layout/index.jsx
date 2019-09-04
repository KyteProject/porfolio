import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Footer } from 'Theme';
import ThemeContext from '../../../context/ThemeContext';

import { Global } from './styles';
import './fonts.css';

export const Layout = ({ children }) => (
	<>
		<Global />
		{children}
		<Footer />
	</>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
