import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        users: [
            { 
                "name": "valentin",
                "age": 30
            },
            { 
                "name": "martin",
                "age": 44
            },
            { 
                "ombeline": "user",
                "age": 10
            }
        ]
    })
} 