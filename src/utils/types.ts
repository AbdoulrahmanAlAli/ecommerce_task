import { ProductDto } from "./dtos";

export type JwtPayload = {
    id: number,
    isAdmin: boolean,
    username: string
}

export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
  };

export type UserShop = {
    id: number;
    email: string;
    username: string;
    password: string;
    isAdmin: boolean;
    products: ProductDto[];
    createAt: Date;
    updateAt: Date;
}