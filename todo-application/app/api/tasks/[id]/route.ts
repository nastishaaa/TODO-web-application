import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params; 

        const task = await prisma.task.findUnique({
            where: { id: parseInt(id) },
        });
        
        if (!task) return NextResponse.json({ error: "Task not found" }, { status: 404 });
        return NextResponse.json({ success: true, task }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params; 
        const body = await req.json();
        const { title, description, done, priority } = body;

        const updatedTask = await prisma.task.update({
            where: { id: parseInt(id) },
            data: { title, description, done, priority },
        });

        return NextResponse.json({ success: true, updatedTask }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params; 

        const task = await prisma.task.findUnique({
            where: { id: parseInt(id) },
        });

        if (!task) return NextResponse.json({ error: "Task not found" }, { status: 404 });

        await prisma.task.delete({
            where: { id: parseInt(id) },
        });

        return new NextResponse(null, { status: 204 });
    } catch (error) {
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
}