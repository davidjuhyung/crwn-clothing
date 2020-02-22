import React from 'react';
import './directory.style.scss';
import MenuItem from '../../components/menu-items/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from './directory.selector';

const Directory = ({ sections }) => {
	return (
		<div className="directory-menu">
			{sections.map(({ id, ...otherProps }) => (
				<MenuItem key={id} {...otherProps}></MenuItem>
			))}
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
