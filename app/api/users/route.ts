import { prisma } from "@/lib/prisma";
import { Gender } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

function pickRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const genderParam = searchParams.get("gender")?.toUpperCase();
        const countryParam = searchParams.get("country");

        let userGender: Gender;
        if (genderParam) {
            if (genderParam !== "MALE" && genderParam !== "FEMALE") {
                return NextResponse.json(
                    { error: "Invalid gender. Must be MALE or FEMALE." },
                    { status: 400 }
                );
            }
            userGender = genderParam;
        } else {
            userGender = Math.round(Math.random()) === 0 ? "MALE" : "FEMALE";
        }

        const locationWhere: { country?: string } = {};
        if (countryParam) {
            locationWhere.country = countryParam;
        }

        const firstNames = await prisma.firstName.findMany({
            where: { gender: userGender }
        });
        const lastNames = await prisma.lastName.findMany();
        const locations = await prisma.location.findMany({
            where: locationWhere
        });
        const avatars = await prisma.avatarPool.findMany({
            where: { gender: userGender }
        });

        if (locations.length === 0) {
            return NextResponse.json(
                { error: `No locations found for country "${countryParam}".` },
                { status: 404 }
            );
        }

        const firstName = pickRandom(firstNames);
        const lastName = pickRandom(lastNames);
        const location = pickRandom(locations);
        const avatar = pickRandom(avatars);

        const username = `${firstName.name.toLowerCase()}.${lastName.name.toLowerCase()}${Math.floor(Math.random() * 999)}`;

        const randomUser = {
            name: `${firstName.name} ${lastName.name}`,
            email: `${firstName.name.toLowerCase()}.${lastName.name.toLowerCase()}@example.com`,
            username,
            gender: userGender,
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