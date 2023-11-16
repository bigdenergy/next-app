import { ErrorBoundary } from "next/dist/client/components/error-boundary"
import Link from "next/link"
import Error from "./error"

export default function ProductLayout({
    children,
    fallback
  }: {
    children: React.ReactNode
    fallback: React.ReactNode
  }) {
    return (
        <div className="px-2"> 
            <header className="py-2 flex gap-2 my-4"> 
              <Link href="/products/confitures/">Confitures</Link>
              <Link href="/products/quads">Quads</Link>
            </header>
            <div className="content">
                  {children}
            </div>
        </div>
    )
  }


  