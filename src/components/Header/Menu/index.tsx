import Link from "next/link"
import Icons from "./Icons"

export default function Menu() {
    return (
        <div className="menu-wrapper flex justify-between gap-4">
            <div className="menu-left flex gap-2">
                <div className="menu self-center flex gap-2">
                    <Link href="/products">Products</Link>
                    <Link href="/categories">Categories</Link>
                    <Link href="/about">About shop</Link>
                </div>
            </div>
            <Icons/>
        </div>
    )
}