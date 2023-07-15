import { error, redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}
};

export const actions = {
	create: async ({ request, locals }) => {
		const formData = await request.formData();

		const images = formData.get('images');

		if (images.size === 0) {
			formData.delete('images');
		}
		try {
			await locals.pb.collection('products').create(formData);
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
		throw redirect(303, '/');
	}
};
