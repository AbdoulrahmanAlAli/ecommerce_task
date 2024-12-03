export interface CreateProductDto {
    title: string;
    description: string;
    price: number
}

export interface ProductDto {
    id: number;
    title: string;
    description: string;
    price: number
}

export interface UpdateProductDto {
    title?: string;
    description?: string;
    price?: number
}

export interface RegisterUserDto {
    username: string;
    email: string;
    password: string;
}

export interface LoginUserDto {
    email: string;
    password: string;
}