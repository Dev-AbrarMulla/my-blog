import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, message } = await request.json();

  if (!name || !message) {
    return NextResponse.json(
      { error: "Name and message are required" },
      { status: 400 }
    );
  }

  console.log("New message:", name, message);
  return NextResponse.json({ ok: true }, { status: 201 });
}