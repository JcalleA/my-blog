import pool from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug // 'a', 'b', or 'c'
    const [res] = await pool.query(`"SELECT * FROM posts WHERE URLAmigable LIKE '${slug}'"`)

    return NextResponse.json(res) 

}
