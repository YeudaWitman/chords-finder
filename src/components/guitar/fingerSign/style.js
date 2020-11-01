import styled from 'styled-components';

const FingerSign = styled.div`
	position: absolute;
	height: 40px;
	top: 22px;
  left: -23px;
	background-color: #000;
	border-radius: 20px;
	z-index: 100;
`;

export const Finger = styled(FingerSign)`
	width: 40px;
	color: #fff;
	text-align: center;
	padding: .1rem;
	font-size: 1.2rem;
`;

export const Bridge = styled(FingerSign)`
  width: 339px;
`;