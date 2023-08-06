import React, { useState, useEffect } from "react";
import Logo from "./components/Logo";
import ShowEvents from "./components/Showevents";
import Adressinput from "./components/Adressinput";
import Qrcode from "./components/Qrcode";
import { generateQRCode } from "./utils/createQR";

const APP_STATES = {
	SHOW_EVENTS: "SHOW_EVENTS",
	SHOW_ADDRESS_INPUT: "SHOW_ADDRESS_INPUT",
	SHOW_QR_CODE: "SHOW_QR_CODE"
};

export default function App() {
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [qrCodeData, setQRCodeData] = useState(null);
	const [appState, setAppState] = useState(APP_STATES.SHOW_EVENTS);

	useEffect(() => {
		const storedQRCodeData = localStorage.getItem("qrCodeData");
		if (storedQRCodeData) {
			setQRCodeData(storedQRCodeData);
			setAppState(APP_STATES.SHOW_QR_CODE);
		}
	}, []);

	const handleSelectEvent = event => {
		setSelectedEvent(event);
		setAppState(APP_STATES.SHOW_ADDRESS_INPUT);
	};

	const handleFormSubmit = customerId => {
		// Generiere den QR-Code mit der erhaltenen Kunden-ID
		generateQRCode(customerId)
			.then(url => {
				// Setze den generierten QR-Code in den State, um ihn anzuzeigen
				setQRCodeData(url);
				localStorage.setItem("qrCodeData", url);
				setAppState(APP_STATES.SHOW_QR_CODE);
			})
			.catch(err => {
				console.error("Fehler beim Generieren des QR-Codes:", err);
			});
	};

	const handleQRCodeRemoved = () => {
		// Daten löschen und zur Startseite zurückkehren
		localStorage.removeItem("qrCodeData");
		setQRCodeData(null);
		setSelectedEvent(null);
		setAppState(APP_STATES.SHOW_EVENTS);
	};

	return (
		<>
			<Logo />
			{appState === APP_STATES.SHOW_EVENTS && (
				// ShowEvents Component
				<ShowEvents onSelectEvent={handleSelectEvent} />
			)}
			{appState === APP_STATES.SHOW_ADDRESS_INPUT && (
				// AddressInput Component
				<Adressinput
					selectedEvent={selectedEvent}
					onFormSubmit={handleFormSubmit}
				/>
			)}
			{appState === APP_STATES.SHOW_QR_CODE && (
				// qrCode Component
				<Qrcode qrCodeData={qrCodeData} onQRCodeRemoved={handleQRCodeRemoved} />
			)}
		</>
	);
}
