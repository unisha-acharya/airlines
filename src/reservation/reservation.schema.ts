import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose, { Document } from 'mongoose';
import { Airline, AirLineSchema } from 'src/airlines/entities/airline.entity';

export type ReservationDocument = Reservation & Document;
@Schema()
export class Reservation {
  @Prop()
  name: string;
  @Prop({
    required: true,
  })
  dob: string;
  @Prop()
  contactPerson: string;
  @Prop({
    required: true,
  })
  email: string;
  @Prop({
    required: true,
  })
  phoneNumber: string;
  @Prop({
    required: true,
  })
  address: string;
  @Prop()
  streetAddress: string;
  @Prop()
  streetAddressLine2: string;
  @Prop()
  city: string;
  @Prop()
  stateProvince: string;
  @Prop()
  postalZipCode: string;
  @Prop({
    required: true,
  })
  country: string;
  @Prop()
  depatureDateNTime: string;
  @Prop({
    required: true,
  })
  returnDateNTime: string;
  @Prop({
    required: true,
  })
  depatureFrom: string;
  @Prop()
  depatureCity: string;
  @Prop({
    required: true,
  })
  destination: string;
  @Prop()
  destinationCity: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'AirLineSchema' })
  airlineId: typeof AirLineSchema;
  @Prop({
    required: true,
  })
  fare: string;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
