import React from "react";

function ShowEvents({ onSelectEvent }) {
	const events = [
		{
			id: "1",
			date: "2023-08-11",
			name: "Hello Friday",
			slogan: "Friday with Beer"
		},
		{
			id: "2",
			date: "2023-08-12",
			name: "Hello Sat",
			slogan: "Sat with loud Music"
		},
		{
			id: "3",
			date: "2023-08-13",
			name: "Hello Sunday",
			slogan: "Sunday in Sun"
		},
		{
			id: "4",
			date: "2023-08-18",
			name: "New Friday",
			slogan: "Friday in Group"
		},
		{
			id: "5",
			date: "2023-08-19",
			name: "New Sat",
			slogan: "Sat with big Steak"
		},
		{
			id: "6",
			date: "2023-08-20",
			name: "New Sunday",
			slogan: "Sunday with Friends"
		}
	];

	// Hilfsfunktion zur Formatierung des Datums in das Format "YYYY-MM-DD"
	const formatDate = date => {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const day = String(date.getDate()).padStart(2, "0");
		return `${year}-${month}-${day}`;
	};

	return (
		<div className="grid grid-cols-1 gap-4 mt-4">
			<h2 className="text-lg font-bold text-center">los próximos eventos</h2>
			<div>
				{events.map(event => (
					<div key={event.id} className="p-3 text-center">
						<button
							onClick={() => onSelectEvent(event)}
							className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
							{event.name}
						</button>
						<p>{event.slogan}</p>
						<p>{event.date}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default ShowEvents;
