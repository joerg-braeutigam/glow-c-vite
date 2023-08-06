import React from "react";

function Qrcode({ qrCodeData }) {
	return (
		<div className="text-center">
			<img src={qrCodeData} alt="QR Code" />
		</div>
	);
}

export default Qrcode;
