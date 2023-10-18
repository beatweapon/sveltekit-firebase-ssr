export const load = async ({ locals }) => {
	return {
		id: locals.id,
		email: locals.email
	};
};
