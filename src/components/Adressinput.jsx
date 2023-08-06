import { useEffect, useState } from "react";
import { convertToPeruvianDate } from "../utils/dateUtils";

function Adressinput({ selectedEvent, onFormSubmit }) {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		dni: "",
		birthDate: "2000-01-01", // Standard-Datum "01.01.2000"
		email: "",
		phone: ""
	});

	const handleFormChange = event => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	useEffect(() => {
		const storedData = localStorage.getItem("formData");
		if (storedData) {
			setFormData(JSON.parse(storedData));
		}
	}, []);

	const handleFormSubmit = async event => {
		event.preventDefault();

		localStorage.setItem("formData", JSON.stringify(formData));

		// Hier kannst du den Code für die Verarbeitung der Formulardaten einfügen
		// Nach der Verarbeitung kannst du die API-Anfrage zum Speichern der Daten machen
		// Annahme: Die API-Anfrage gibt die customerId zurück
		// Annahme: Der customerId-Wert wird in der Variable "customerId" gespeichert

		// Übergib die customerId an die Funktion onFormSubmit in der App.jsx
		const customerId = "123456789";
		onFormSubmit(customerId);
	};

	return (
		<div className="mt-4 p-4 bg-white rounded-md shadow-md">
			<h2 className="text-lg font-bold text-center mb-4">
				{selectedEvent.name} - {convertToPeruvianDate(selectedEvent.date)}
			</h2>
			<form onSubmit={handleFormSubmit}>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<input
							type="text"
							name="firstName"
							value={formData.firstName}
							onChange={handleFormChange}
							placeholder="Nombre"
							className="w-full p-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
							required
						/>
					</div>
					<div>
						<input
							type="text"
							name="lastName"
							value={formData.lastName}
							onChange={handleFormChange}
							placeholder="Apellidos"
							className="w-full p-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
							required
						/>
					</div>
					<div className="col-span-2">
						<input
							type="text"
							name="dni"
							value={formData.dni}
							onChange={handleFormChange}
							placeholder="DNI"
							className="w-full p-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
							required
						/>
					</div>
					<label className="grid place-items-center text-xl text-gray-400">
						Fecha de Nacimiento:
					</label>
					<div>
						<input
							type="date"
							name="birthDate"
							value={formData.birthDate}
							onChange={handleFormChange}
							className="w-full p-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
							required
						/>
					</div>
					<div className="col-span-2">
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleFormChange}
							placeholder="E-Mail"
							className="w-full p-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div className="col-span-2">
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleFormChange}
							placeholder="Teléfono"
							className="w-full p-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
							required
						/>
					</div>
					<div className="col-span-2">
						<button
							type="submit"
							className="w-full p-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">
							Crea tu entrada
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Adressinput;
