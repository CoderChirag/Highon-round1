import styled from 'styled-components';

const ModalWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalBox = styled.div`
	border-radius: 15px;
	padding: 0 0;
	margin: 0.5rem auto;
	width: 50%;
	min-height: 50px;
	background-color: white;
	padding-bottom: 20px;
	display: flex;
	flex-direction: column;
`;

const ModalHeader = styled.div`
	text-align: center;
	font-weight: bold;
`;

const ModalColours = styled.div`
	text-align: center;
	display: flex;
	justify-content: space-evenly;
	width: 80%;
	margin: auto;
	cursor: pointer;
`;

const ModalFooter = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 50%;
	margin: auto;
	margin-top: 20px;
`;

export { ModalWrapper, ModalBox, ModalHeader, ModalColours, ModalFooter };
