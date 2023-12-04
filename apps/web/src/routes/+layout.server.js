export const load = async ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		const user = await locals.pb.collection('users').getOne(locals.pb.authStore.model.id);
		if (!user.isAdmin) {
			return {
				isAdmin: false
			};
		} else {
			console.log(user.username);
			return {
				isAdmin: true
			};
		}
	} else {
		return {
			isAdmin: undefined
		};
	}
};
