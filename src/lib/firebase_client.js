import { PUBLIC_API_KEY, PUBLIC_AUTH_DOMAIN } from '$env/static/public';
import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence } from 'firebase/auth';

/**
 * A function that returns a Firebase client result.
 *
 * @typedef {{
 *   error: false;
 *   data: import('firebase/auth').Auth;
 *   msg?: undefined;
 * }} FirebaseClientSuccess
 *
 * @typedef {{
 *   error: true;
 *   msg: string;
 *   data?: undefined;
 * }} FirebaseClientError
 *
 * @returns {FirebaseClientSuccess | FirebaseClientError}
 */
export function getFirebaseClient() {
	try {
		const firebaseConfig = {
			apiKey: PUBLIC_API_KEY,
			authDomain: PUBLIC_AUTH_DOMAIN
		};
		const app = initializeApp(firebaseConfig);
		const auth = getAuth(app);
		/** @type {import('firebase/auth').Persistence} */
		const persistance = { type: 'NONE' };
		void setPersistence(auth, persistance);
		return { error: false, data: auth };
	} catch (error) {
		console.error(error);
		return { error: true, msg: 'Error initializing firebase client' };
	}
}
