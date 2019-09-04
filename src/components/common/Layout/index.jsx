import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from 'Theme';
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
