import React from 'react';
import './homepage.style.js';
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.style.js';

const HomePage = props => {
	return (
		<HomePageContainer>
			<Directory></Directory>
		</HomePageContainer>
	);
};

export default HomePage;
