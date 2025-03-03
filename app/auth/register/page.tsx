import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  return NextResponse.json(user);
}
