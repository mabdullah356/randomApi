import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const limitParam = searchParams.get("limit");

        let limit: number | undefined;

        if (limitParam) {
            const parsed = parseInt(limitParam, 10);
            if (isNaN(parsed) || parsed < 1) {
                return NextResponse.json(
                    { error: "Invalid limit. Must be a positive integer." },
                    { status: 400 }
                );
            }
            limit = parsed;
        }

        const products = await prisma.product.findMany({
            ...(limit !== undefined && { take: limit }),
        });

        return NextResponse.json({
            message: "Products fetched successfully",
            status: 200,
            count: products.length,
            products,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Internal server error", details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}