import { Controller, Get, Param, Post, Body, HttpException } from '@nestjs/common';
import { completeEvent, completeGuest, EventI, events, GuestI, utils } from 'core';
import { EventPrisma } from './event.prisma';

@Controller('events')
export class EventsController {

    constructor(readonly repository: EventPrisma) {}

    @Get()
    async getEvents() {
        return (await this.repository.searchAllEvent()).map(this.serialize);
    }   

    @Get(':idOrEventSlug')
    async getEvent(@Param('idOrEventSlug') idOrEventSlug: string) {
        let event: EventI;
        if (utils.validateId(idOrEventSlug)) {
            event = await this.repository.searchEventById(idOrEventSlug,true);
        }else {
            event = await this.repository.searchEventBySlug(idOrEventSlug,true);
        }
        if (!event) throw new Error("Event is not found");
        return this.serialize(event);
    }

    @Get('validate/:eventSlug/:id')
    async validateEventSlug(@Param('eventSlug') eventSlug: string, @Param('id') id: string) {
        // return events.find(event => event.eventSlug === eventSlug)?.id === id;
        const event = events.find(event => event.eventSlug === eventSlug);
        return { valid: !event || event.id === id };
    }

    @Post('access')
    async accessEvent(@Body() datas: { id: string, password: string }) {
        const event = await this.repository.searchEventById(datas.id, false);
        if (!event) throw new HttpException("Event is not found", 404);
        if (event.password !== datas.password) throw new HttpException("Password is incorrect", 400);    

        return this.serialize(event);
    } 

    @Post(':eventSlug/guest')
    async registerGuest(@Param('eventSlug') eventSlug: string, @Body() guest: GuestI) {
        const event = await this.repository.searchEventBySlug(eventSlug);

        if (!event) throw new HttpException("Event is not found", 404);

        const completedGuest = completeGuest(guest);
        await this.repository.registerGuest(event, completedGuest);
    }


    @Post('') 
    async registerEvent(@Body() event: EventI) {
        const registeredEvent = await this.repository.searchEventBySlug(event.eventSlug);

        if (registeredEvent && registeredEvent.id !== event.id) throw new HttpException("Event is already registered", 400);

        const completedEvent = completeEvent(this.unSerialize(event));
        await this.repository.registerEvent(completedEvent);
    }   
    

    private serialize(event: EventI) {
        if (!event) return null;
        return {
            ...event,
            data: utils.formatDate(event.data),
        };
    }

    private unSerialize(event: any) {
        if (!event) return null;
        return {
            ...event,
            data: utils.unformatDate(event.data),
        };
    }   
}
