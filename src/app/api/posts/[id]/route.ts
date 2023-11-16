import { NextResponse } from "next/server";

const posts = [
    {
        id: 1,
        slug: "en-route-pour-dubai",
        title: "En route pour Dubai",
        description: "description"
    },
    {
        id: 2,
        slug: "en-route-pour-lille",
        title: "En route pour Lille",
        description: "description"
    }
]

export async function GET(request: Request, context: any) {
    const { params } = context;
    return NextResponse.json({
        post: posts.find((x) => x.id.toString() === params.id),
    });
}