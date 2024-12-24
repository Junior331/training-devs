import { PrismaClient } from '@prisma/client';
import { events } from 'core';

async function seed() {
  const prisma = new PrismaClient();

  const transactions = events.map(async (event) => {
    await prisma.event.create({
      data: {
        id: event.id,
        eventSlug: event.eventSlug,
        password: event.password,
        name: event.name,
        location: event.location,
        data: event.data,
        description: event.description,
        image: event.image,
        imageBackground: event.imageBackground,
        expectedAudience: event.expectedAudience,
        guests: {
          create: event.guests.map((guest) => ({
            id: guest.id,
            name: guest.name,
            email: guest.email,
            confirmed: guest.confirmed,
            hasAccompaniments: guest.hasAccompaniments,
            accompanimentsQuantity: guest.accompanimentsQuantity,
          })),
        },
      },
    });
  });

  await Promise.all(transactions);
}

seed();
