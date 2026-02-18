export interface Product {
    id: number;
    title: string;
    price: number;
    discount?: number;
    images?: string[];
    image?: string;
}

export interface ProductsResponse {
    products: Product[];
    total?: number;
    page?: number;
    limit?: number;
}
