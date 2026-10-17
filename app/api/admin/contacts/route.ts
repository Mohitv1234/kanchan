import { NextResponse } from 'next/server'; import { prisma } from '@/lib/prisma'; import { isAdmin } from '@/lib/auth';
export async function GET(){if(!await isAdmin())return NextResponse.json({error:'Unauthorized'},{status:401});return NextResponse.json(await prisma.contactMessage.findMany({orderBy:{createdAt:'desc'}}))}
