import React, { useRef, useEffect } from "react";
import Pikaday from "pikaday";
import moment from "moment";

const PikadayExample = () => {
	const dateInputRef = useRef(null);

	useEffect(() => {
		const picker = new Pikaday({
			field: dateInputRef.current,
			format: "DD.MM.YYYY",
			onSelect: date => {
				const formattedDate = moment(date).format("DD.MM.YYYY");
				console.log("Ausgewähltes Datum:", formattedDate);
			}
		});

		return () => {
			picker.destroy();
		};
	}, []);

	return (
		<div className="pikaday-container">
			<input
				type="text"
				name="date"
				ref={dateInputRef}
				placeholder="DD.MM.YYYY"
				className="w-full p-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
			/>
		</div>
	);
};

export default PikadayExample;
