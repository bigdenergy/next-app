"use client";
import { useParams } from "next/navigation"

export default function deuxiemeConfiture() {
    const params = useParams();
    return <div>Confiture de {params.confiture} et {params.deuxiemeConfiture}</div>
}
