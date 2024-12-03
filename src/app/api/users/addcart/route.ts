import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verifyToken";

/**
 * @method PUT 
 * @route ~/api/users/addcart
 * @desc Add Cart 
 * @access private
 */
export async function PUT(request: NextRequest) {
    try {
        const userPayload = verifyToken(request);
        if (!userPayload) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json() as { id: number };

        const product = await prisma.product.findUnique({ where: { id: body.id } });
        if (!product) {
            return NextResponse.json({ message: 'Product not found' }, { status: 404 });
        }

        const user = await prisma.user.findUnique({
            where: { id: userPayload.id },
            include: { products: true },
        });

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        console.log('here')

        const isProductInUserCart = await prisma.user.findFirst({
            where: {
                id: userPayload.id,
                products: { some: { id: product.id } },
            },
        });


        if (isProductInUserCart) {
            await prisma.user.update({
                where: { id: userPayload.id },
                data: {
                    products: {
                        disconnect: { id: product.id },
                    },
                },
            });
            return NextResponse.json({ message: 'Product removed from cart' }, { status: 200 });
        } else {
            await prisma.user.update({
                where: { id: userPayload.id },
                data: {
                    products: {
                        connect: { id: product.id }, 
                    },
                },
            });
            return NextResponse.json({ message: 'Product added to cart' }, { status: 200 });
        }

    } catch (error) {
        return NextResponse.json(
            {message: 'internal server error'},
            {status: 500}
        )
        console.log(error)
    }
}

