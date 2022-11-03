import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import mongoose, { Document } from 'mongoose';

export type AirlineDocument = Airline & Document;

@Schema({
  timestamps: true,
  toObject: { getters: true },
  toJSON: { getters: true },
})
export class Airline {
  // @Transform(({ value }) => value.toString())
  // _id: string;
  // @Prop({
  //   required: true,
  // })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ReservationSchema' })
  name: string;

  @Prop({
    required: true,
  })
  companyName: string;
}

export const AirLineSchema = SchemaFactory.createForClass(Airline);
