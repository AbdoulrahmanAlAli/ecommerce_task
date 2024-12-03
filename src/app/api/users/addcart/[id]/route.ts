import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { verifyToken } from "@/utils/verifyToken";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const userPayload = verifyToken(request);
    if (!userPayload) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params
    const productId = parseInt(id)

    if (isNaN(productId)) {
      return NextResponse.json({ message: "Invalid product ID" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userPayload.id },
      include: { products: true },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isInCart = user.products.some((product) => product.id === productId);

    return NextResponse.json({ isInCart }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
