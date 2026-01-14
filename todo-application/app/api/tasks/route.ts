import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
    try {
        const tasks = await prisma.task.findMany();
        return NextResponse.json({ success: true, tasks }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
    
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { title, description, priority } = body;

        if (!title || !description) return NextResponse.json({ error: "Title and description is required!" }, { status: 400 });

        const newTask = await prisma.task.create({
            data: {
                title,
                description,
                priority: priority ?? 1,
            },
        });
        return NextResponse.json(newTask, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
    
}