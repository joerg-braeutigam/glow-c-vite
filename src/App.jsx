import React, { useState } from "react";
import Logo from "./components/Logo";
import ShowEvents from "./components/Showevents";
import Adressinput from "./components/Adressinput";
import Qrcode from "./components/Qrcode";
import { generateQRCode } from "./utils/createQR";

export default function App() {
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [qrCodeData, setQRCodeData] = useState(null);

	useEffect(() => {
		const storedQRCodeData = localStorage.getItem("qrCodeData");
		if (storedQRCodeData) {
			setQRCodeData(storedQRCodeData);
		}
	}, []);

	const handleSelectEvent = event => {
		setSelectedEvent(event);
	};

	const handleFormSubmit = customerId => {
		// Generiere den QR-Code mit der erhaltenen Kunden-ID
		generateQRCode(customerId)
			.then(url => {
				// Setze den generierten QR-Code in den State, um ihn anzuzeigen
				setQRCodeData(url);
				localStorage.setItem("qrCodeData", url);
			})
			.catch(err => {
				console.error("Fehler beim Generieren des QR-Codes:", err);
			});
	};

	return (
		<>
			<Logo />
			{!selectedEvent && !qrCodeData && (
				// ShowEvents Component
				<ShowEvents onSelectEvent={handleSelectEvent} />
			)}
			{selectedEvent && !qrCodeData && (
				// AddressInput Component
				<Adressinput
					selectedEvent={selectedEvent}
					onFormSubmit={handleFormSubmit}
				/>
			)}
			{qrCodeData && (
				// qrCode Component
				<Qrcode qrCodeData={qrCodeData} />
			)}
		</>
	);
}
