import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

/**
 * @method GET
 * @route ~/api/users/logout
 * @desc Logout User
 * @access public
 */
export async function GET(request: NextRequest) {
    try {
        (await cookies()).delete('jwtToken')
        return NextResponse.json({ message: 'logout' }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            {message: 'internal server error'},
            {status: 500}
        )
        console.log(error)
    }
}