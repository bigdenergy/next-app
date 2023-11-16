"use client";

import { useSearchParams } from "next/navigation";

export default function Products() {
    const searchParams = useSearchParams();
    const queries = searchParams;
    // ?name=query
    console.log(queries.get('name'));
    return (
        <>
        {
            queries.get('name') ? <div>Products - {queries.get("name")}</div> : <div>Please query a product with <b>?name=product</b></div>
        }
        </>
    )
}