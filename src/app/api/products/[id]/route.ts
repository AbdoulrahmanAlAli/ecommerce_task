import { UpdateProductDto } from "@/utils/dtos";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";


interface Props {
    params: { id: string }
}

/**
 * @method GET
 * @route ~/api/articles/:id
 * @desc Get Single Article By Id
 * @access public
 */
export async function GET(request: NextRequest, {params}: Props) {
    try{
        const product = await prisma.product.findUnique({ where: {id: parseInt(params.id)} })

    if(!product) {
        return NextResponse.json({message: 'article not found'}, { status: 404 })
    }

    return NextResponse.json(product, {status: 200})
    } catch (error) {
        return NextResponse.json(
            {message: 'internal server error'},
            {status: 500}
        )

        console.log(error)
    }
}

/**
 * @method PUT
 * @route ~/api/articles/:id
 * @desc Update Article
 * @access public
 */
export async function PUT(request: NextRequest, {params}: Props) {
    try{
        const product = prisma.product.findUnique({ 
            where: { id: parseInt(params.id) }
         })
    
        if(!product) {
            return NextResponse.json({message: 'product not found'}, { status: 404 })
        }
    
        const body = (await request.json()) as UpdateProductDto
        const updatedProduct = await prisma.product.update({ 
            where: { id: parseInt(params.id) },
            data: {
                title: body.title,
                description: body.description,
                price: body.price
            }
         })
    
        return NextResponse.json(updatedProduct, {status: 200})
    } catch (error) {
        return NextResponse.json(
            {message: 'internal server error'},
            {status: 500}
        )

        console.log(error)
    }
}

/**
 * @method DELETE
 * @route ~/api/articles/:id
 * @desc Delete Article
 * @access public
 */
export async function DELETE(request: NextRequest, {params}: Props) {
    try{
        const product = await prisma.product.findUnique({ 
            where: { id: parseInt(params.id) }
         })
    
        if(!product) {
            return NextResponse.json({message: 'product not found'}, { status: 404 })
        }
    
        await prisma.product.delete({
            where: { id: parseInt(params.id) }
        })
    
        return NextResponse.json({message: 'product deleted'}, {status: 200})
    } catch (error) {
        return NextResponse.json(
            {message: 'internal server error'},
            {status: 500}
        )

        console.log(error)
    }
}