// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			currentUser:
				| {
						id: string;
						email: string;
				  }
				| undefined;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
