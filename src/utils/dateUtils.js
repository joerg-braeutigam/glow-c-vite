// Funktion zur Konvertierung des Datums in einen peruanischen Datumsstring mit spanischen Wochentagen
export function convertToPeruvianDate(dateString) {
	const daysOfWeek = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];
	const [year, month, day] = dateString.split("-").map(Number);
	const date = new Date(year, month - 1, day); // Monate in JavaScript beginnen bei 0 (Januar ist 0)

	const dayOfWeek = daysOfWeek[date.getDay()];
	const peruvianDate = `${dayOfWeek}, ${day}.${month}.${year}`;

	return peruvianDate;
}
