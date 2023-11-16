import { NextResponse } from "next/server";

export async function GET(request: Request) { 
    try {
        const response = await fetch(`http:localhost:3000/api/users/`, {
            method: "GET",
            headers: {
                Accept: "application/json",
            }, 
        });
        if(response) {
            console.log(response);
            const data = await response.json()
            console.log(data);
            return NextResponse.json({
                success:true
            })
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success:false
        })
    }
/*
    if(!newUsers) throw new Error('no new users found');

    const users = [
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

    console.log(body)
    return NextResponse.json({ 
        users : [...users, ...newUsers]
    }) */
}