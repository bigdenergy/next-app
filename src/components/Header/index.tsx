"use client";
import Link from "next/link";
import Menu from "./Menu";
import { useGlobalContext } from "@/context";

export default function Header({children}: { children: React.ReactNode }) {

    const { title } = useGlobalContext();
    return (
        <header className="py-3 border-b mb-4 px-2 pb-6 flex">
            <div className="logo mr-20">        
                <Link href="/"><h1 className="text-2xl font-semibold self-center">{title}</h1></Link>
            </div>
            {children}
        </header>
    )
}
