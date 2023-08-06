import React from "react";
import LogoImage from "../assets/glow-logo.png"; // Passe den Pfad entsprechend an

function Logo() {
	return (
		<div className="bg-gray-900 grid grid-cols-2">
			{/* Hier das Logo einfügen */}
			<a href="./">
				<img src={LogoImage} alt="GlowClub Logo" className="p-2" />
			</a>
			<div className="text-white p-3 text-right text-sm">
				{/* Informationen zu Öffnungszeiten und Telefonnummern */}
				Abierto: <br />
				Vi/Sa/Do: A partir de 8:00pm <br />
				Whatsapp:{" "}
				<a href="https://wa.me/51970738532" target="_new">
					970738532
				</a>{" "}
				<br />
				Ubicación:{" "}
				<a href="https://goo.gl/maps/GVJEhBsEP3PCkdUk6" target="_new">
					Ov. La Marina - Cervecería Costera{" "}
				</a>
			</div>
		</div>
	);
}

export default Logo;
