import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAirlineDto } from './dto/create-airline.dto';
import { UpdateAirlineDto } from './dto/update-airline.dto';
import { Airline, AirlineDocument } from './entities/airline.entity';

@Injectable()
export class AirlinesService {
  constructor(
    @InjectModel(Airline.name)
    private airlineModel: Model<AirlineDocument>,
  ) {}

  create(createAirlineDto: CreateAirlineDto): Promise<Airline> {
    const createAirLine = new this.airlineModel(createAirlineDto);
    return createAirLine.save();
  }

  findAll() {
    return this.airlineModel.find();
  }

  findOne(id: number) {
    console.log({ id });
    if (!id) {
      throw new NotFoundException('Airlines not found');
    }

    return this.airlineModel.findOne({ id });
  }

  async update(id: number, updateAirlineDto: UpdateAirlineDto) {
    const airline = await this.airlineModel.findOne({ id });

    if (!airline) {
      throw new NotFoundException('Airlines not found');
    }
    Object.assign(airline, updateAirlineDto);
    const updateAirlines = new this.airlineModel(updateAirlineDto);
    return updateAirlines.save();
  }

  async remove(id: number) {
    const removeAirlines = await this.airlineModel.findOne({ id });
    console.log(removeAirlines, 'removeAirlines');
    if (!removeAirlines) {
      throw new NotFoundException('Airlines Not Found !!');
    }

    return this.airlineModel.deleteOne({ removeAirlines });
  }
}
