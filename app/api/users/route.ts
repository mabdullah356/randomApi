import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const users = await prisma.user.findMany();
        if (!users) return NextResponse.json({ error: "No users found" }, { status: 404 })
        return NextResponse.json({ message: "Users fetched successfully", status: 200, users })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}