import { AES, enc } from "crypto-js";

export function encryptData(data, secretKey) {
	const encryptedData = AES.encrypt(data, secretKey).toString();
	return encryptedData;
}

export function decryptData(encryptedData, secretKey) {
	const decryptedData = AES.decrypt(encryptedData, secretKey).toString(
		enc.Utf8
	);
	return decryptedData;
}
