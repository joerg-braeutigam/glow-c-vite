import QRCode from "qrcode";
const url = "https://glowclub.pe/validate/";

export function generateQRCode(customerId) {
	const qrCodeContent = `${url}?c=${customerId}`;
	return QRCode.toDataURL(qrCodeContent, { width: 512 });
}
