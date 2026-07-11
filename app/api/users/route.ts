import { prisma } from "@/lib/prisma";
import { Gender } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

function pickRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

export async function GET(req: NextRequest) {
    try {
        const Usergender: Gender = Math.round(Math.random()) === 0 ? "MALE" : "FEMALE";

        const firstNames = await prisma.firstName.findMany({
            where: { gender: Usergender }
        });
        const lastNames = await prisma.lastName.findMany();
        const locations = await prisma.location.findMany();
        const avatars = await prisma.avatarPool.findMany({
            where: { gender: Usergender }
        });

        const firstName = pickRandom(firstNames);
        const lastName = pickRandom(lastNames);
        const location = pickRandom(locations);
        const avatar = pickRandom(avatars);

        const username = `${firstName.name.toLowerCase()}.${lastName.name.toLowerCase()}${Math.floor(Math.random() * 999)}`;

        const randomUser = {
            name: `${firstName.name} ${lastName.name}`,
            email: `${firstName.name.toLowerCase()}.${lastName.name.toLowerCase()}@example.com`,
            username,
            gender: Usergender,
            location: {
                city: location.city,
                state: location.state,
                country: location.country,
            },
            avatar: avatar.url
        }

        return NextResponse.json({ message: "Users fetched successfully", status: 200, randomUser })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}