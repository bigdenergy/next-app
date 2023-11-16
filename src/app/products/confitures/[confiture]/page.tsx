"use client";

import { useParams } from "next/navigation"

export default function Confiture() {
    const params = useParams();
    return <div>{params.confiture}</div>
}
