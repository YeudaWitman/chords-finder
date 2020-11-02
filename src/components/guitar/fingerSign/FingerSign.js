import React from "react";
import { useSelector } from "react-redux";
import { Finger, Bridge } from "./style";

const FingerSign = ({ fretIndex, strIndex }) => {
	const { chord } = useSelector((state) => state);
	const fingers = [];
	const currentFret = chord.fingers[fretIndex];

	for (let i = 0; i <= currentFret.length; i++) {
		if (currentFret[i] === strIndex) {
			fingers.push(<Finger key={i} />);
		}

		if (currentFret[0] === "b") {
			if (strIndex === 0) {
				fingers.push(<Bridge key={i} />);
			}
		}
	}

	return fingers;
};

export default FingerSign;
