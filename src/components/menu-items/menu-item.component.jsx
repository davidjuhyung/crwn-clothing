import React from 'react';
import './menu-item.style.scss';
// react gives each HTML markup (i.e. div) a "style" like normal HTML, but takes in javascript objects, thus 2 {}'s : { {blah: 2px} }

import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
	const className = size ? `${size} menu-item` : 'menu-item';
	return (
		<div
			className={className}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<div
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
				className="background-image"
			/>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
