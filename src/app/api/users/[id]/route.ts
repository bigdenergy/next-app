import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {

    const { params } = context;

    const users = [

        {
            "id": 12,
            "name": "Guillaume"
        },
        {
            "id": 15,
            "name": "Patrick"
        }
    ]
    
    return NextResponse.json({
        user: users.find(x => x.id.toString() === params.id)
    })
}