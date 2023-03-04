import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 500px;
	width: 360px;
	margin-left: auto;
	margin-right: auto;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		width: 50%;
	}
`;

export { StyledContainer };
