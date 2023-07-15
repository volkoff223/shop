import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load = ({ locals, params }) => {
	const getProduct = async (productId) => {
		try {
			const product = serializeNonPOJOs(await locals.pb.collection('products').getOne(productId));
			return product;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};
	return {
		product: getProduct(params.productId)
	};
};
