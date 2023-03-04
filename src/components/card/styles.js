import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	padding: 3rem;
	background-color: ${({ bgcolor }) => bgcolor};
	color: #fff;
	transform: translateZ(0);
`;

const StyledIconContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 4rem;
	height: 40px;
	&::before {
		content: '';
		position: absolute;
		left: 0;
		width: 40px;
		height: 40px;
		background-color: rgb(0 0 0 / 0.3);
		border-radius: 50%;
		z-index: -1;
	}
`;

const StyledIcon = styled.img`
	position: absolute;
	right: 0;
`;

const StyledTitle = styled.h2`
	font-size: 2.5rem;
	margin-bottom: 0.5rem;
`;

const StyledText = styled.p`
	padding-right: 1.5rem;
	font-size: 0.9rem;
	letter-spacing: 0.1rem;
	line-height: 1.75;
`;

const StyledButton = styled.button`
	margin-top: auto;
	padding: 0.7rem 2rem;
	border: none;
	border-radius: 1.5rem;
	color: ${({ bgcolor }) => bgcolor};
	font-size: 1.2rem;

	&:hover {
		background-color: transparent;
		color: #fff;
		border: 1px solid #fff;
		cursor: pointer;
	}
`;

export {
	StyledCard,
	StyledIconContainer,
	StyledIcon,
	StyledTitle,
	StyledText,
	StyledButton
};
