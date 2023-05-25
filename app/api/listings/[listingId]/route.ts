import {NextResponse} from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
  listingId?: string;
}

export async function DELETE(request: Request, {params}: {params: IParams}) {
  const currentUSer = await getCurrentUser();

  if (!currentUSer) {
    return NextResponse.error();
  }

  const {listingId} = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  const listing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUSer.id,
    },
  });

  return NextResponse.json(listing);
}
