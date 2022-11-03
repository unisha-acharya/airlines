import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateReservationDto } from './dto/reservation.dto';
import { ReservationService } from './reservation.service';

@Controller('reservation')
export class ReservationController {
  constructor(private reserveService: ReservationService) {}

  @Post()
  async createReservation(@Body() body: CreateReservationDto) {
    const user = await this.reserveService.create(body);
    return user;
  }

  @Patch('/:id')
  async updateReservation(
    @Param('id') id: string,
    @Body() body: CreateReservationDto,
  ) {
    const user = await this.reserveService.updateReservation(
      parseInt(id),
      body,
    );
    return user;
  }

  @Get()
  async findReservationList() {
    const reserveList = await this.reserveService.getReservation();
    return reserveList;
  }

  @Get('/:id')
  async findSingleReservation(@Param('id') id: string) {
    const reserveList = await this.reserveService.getSingleReservation(
      parseInt(id),
    );
    return reserveList;
  }

  @Delete('/:id')
  async removeReservation(@Param('id') id: string) {
    return this.reserveService.deleteReservation(parseInt(id));
  }
}
