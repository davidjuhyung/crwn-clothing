import styled, { css } from 'styled-components';

export const getButtonStyles = prop => {
	if (prop.isGoogleSignIn) {
		return googleSignInStyles;
	} else if (prop.inverted) {
		return invertedStyles;
	}
	return buttonStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	cursor: pointer;
	display: flex;
	justify-content: center;

	${getButtonStyles}
`;

export const googleSignInStyles = css`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

export const buttonStyles = css`
	background-color: black;
	color: white;
	border: none;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

export const collectionItemStyles = css`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 255px;
`;

export const isCollectionItemButton = prop => {
	if (prop.isCollectionItem) return collectionItemStyles;
};

export const invertedStyles = css`
	${isCollectionItemButton}
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
		opacity: 0.85;
	}
`;
