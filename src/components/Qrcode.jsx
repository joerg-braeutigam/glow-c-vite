import React from "react";

function Qrcode({ qrCodeData, onQRCodeRemoved }) {
	const removeData = () => {
		// Aufruf der Funktion onQRCodeRemoved, um den QR-Code zu löschen
		onQRCodeRemoved();
	};

	return (
		<>
			<div className="text-center">
				<img src={qrCodeData} alt="QR Code" />
			</div>
			<div className="text-center">
				<button
					className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
					onClick={removeData}>
					Borrar los datos e introducirlos de nuevo
				</button>
			</div>
		</>
	);
}

export default Qrcode;
