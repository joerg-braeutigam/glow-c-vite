import React, { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const FlatpickrExample = () => {
	const dateInputRef = useRef(null);

	useEffect(() => {
		const options = {
			dateFormat: "d.m.Y" // Datumsformat
			// Weitere Anpassungsoptionen hier einfügen, falls gewünscht
		};

		flatpickr(dateInputRef.current, options);

		return () => {
			// Flatpickr-Instanz zerstören, wenn die Komponente unmontiert wird
			dateInputRef.current._flatpickr.destroy();
		};
	}, []);

	return (
		<div className="p-4">
			<label className="block mb-2 text-sm font-bold text-gray-700">
				Geburtsdatum
			</label>
			<input
				type="text"
				name="date"
				ref={dateInputRef}
				placeholder="TT.MM.JJJJ"
				className="w-full px-4 py-2 text-base text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
			/>
		</div>
	);
};

export default FlatpickrExample;
