<script>
	import { getImageURL } from '$lib/utils.js';
    export let data
</script>

<div class="flex flex-col w-full mt-4">
    <div class="avatar">
        <div class="w-20 rounded">
            <img src={data.product?.images ? getImageURL(data.product.collectionId, data.product.id, data.product.images, '80x80') : 'Error thing'} alt="product" />
        </div>
    </div>
    <h1 class="text-2xl font-bold mt-4">
        {data.product.name}
    </h1>
    <p class="text-2xl font-light mt-2">{data.product.rating}</p>
    <p>{data.product.description}</p>
    <p>${data.product.price}</p>
</div>