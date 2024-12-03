import prisma from "@/utils/db";
import { CreateProductDto } from '@/utils/dtos'
import { createProductsSchema } from "@/utils/validationSchemas";
import { Product } from '@prisma/client'
import { NextRequest, NextResponse } from "next/server";

/**
 * @method GET
 * @route ~/api/products
 * @desc Get All Products
 * @access public
 */
export async function GET(request: NextRequest) {
    try{
        console.log(request)
        const products = await prisma.product.findMany()
        return NextResponse.json(products, {status: 200})
    } catch (error) {
        return NextResponse.json(
            {message: 'internal server error'},
            {status: 500}
        )
        console.log(error)
    }
}

/**
 * @method POST
 * @route ~/api/products
 * @desc Create New Products
 * @access public
 */
export async function POST(request: NextRequest) {
    try{
        const body = (await request.json()) as CreateProductDto

        const validation = createProductsSchema.safeParse(body)

        if(!validation.success) {
            return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 })
        }

        const newProduct: Product = await prisma.product.create({
            data: {
                title: body.title,
                description: body.description,
                price: body.price
            }
        })

        return NextResponse.json(newProduct, { status: 201 })
    } catch (error) {
        return NextResponse.json(
            {message: 'internal server error'},
            {status: 500}
        )

        console.log(error)
    }
}