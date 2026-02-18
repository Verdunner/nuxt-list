import { type ProductsResponse } from '@/types/product';

export const useProducts = (page: number = 1, limit: number = 12) => {
    return useAsyncData(
        `products-page-${page}`,
        () =>
            $fetch<ProductsResponse>(
                `https://test-task-api.tapir.ws/products`,
                {
                    query: { page, limit },
                },
            ),
        {
            server: true,
        },
    );
};
