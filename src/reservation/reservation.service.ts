import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReservationDto } from './dto/reservation.dto';
import { Reservation, ReservationDocument } from './reservation.schema';

@Injectable()
export class ReservationService {
  constructor(
    @InjectModel(Reservation.name)
    private reserveModel: Model<ReservationDocument>,
  ) {}

  async create(
    createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    const createReservation = new this.reserveModel(createReservationDto);
    return createReservation.save();
  }

  async getReservation() {
    return this.reserveModel.find().populate('airlineId');
  }

  async getSingleReservation(id: number) {
    if (!id) {
      return null;
    }
    return this.reserveModel.findOne({ id });
  }

  async updateReservation(id: number, attr) {
    const reservation = await this.reserveModel.findOne({ id });
    if (!reservation) {
      throw new NotFoundException('Reservation Not Found !!');
    }
    Object.assign(reservation, attr);
    const createReservation = new this.reserveModel(reservation);
    return createReservation.save();
  }

  async deleteReservation(id: number) {
    const reservation = await await this.reserveModel.findOne({ id });
    if (!reservation) {
      throw new NotFoundException('Reservation Not Found !!');
    }

    return this.reserveModel.deleteOne({ reservation });
  }
}
