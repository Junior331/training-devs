import { Injectable } from '@nestjs/common';
import { GuestI , EventI } from 'core';
import { create } from 'domain';
import { PrismaProvider } from 'src/db/prisma.provider';


@Injectable()
export class EventPrisma {
    constructor(readonly prisma: PrismaProvider) {}

    private filterResponse(isComplete: boolean = false) {
        return {
            id: true,
            data: true,
            name: true,
            image: true,
            location: true,
            eventSlug: true,
            description: true,
            guests: isComplete,
            password: isComplete,
            imageBackground: true,
            expectedAudience: isComplete
        }
    }

    registerEvent(event: EventI) {
        return this.prisma.event.create({ data: {
            ...(event as any),
            guests: { create: event.guests }
        } });
    }

    registerGuest(event: EventI,guest: GuestI) {
        return this.prisma.guest.create({ data: {
            ...guest,
            accompanimentsQuantity: +(guest.hasAccompaniments ?? 0),
            event: { connect: { id: event.id } }
        } });
    }

    async searchAllEvent(): Promise<EventI[]> {
        return this.prisma.event.findMany() as any;
    }  

    async searchEventById(id: string, isComplete: boolean = false): Promise<EventI | null> {
        return this.prisma.event.findUnique({ where: { id }, include: { guests: isComplete } }) as any;
    }   

    async searchEventBySlug(slug: string, isComplete: boolean = false): Promise<EventI | null> {
        return this.prisma.event.findUnique({ select: this.filterResponse(isComplete), where: { eventSlug: slug } }) as any;
    }   
}
