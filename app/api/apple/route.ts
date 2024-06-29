import { NextResponse } from "next/server";

export async function GET() {
  const res = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'cherry' },
  ]


  return NextResponse.json({ names: res.map(r => r.name) });
}