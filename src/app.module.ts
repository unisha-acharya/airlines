import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationModule } from './reservation/reservation.module';
import { AirlinesModule } from './airlines/airlines.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`env.${process.env.NODE_ENV}`, '.env'],
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const DB_HOST = config.get<string>('DB_HOST');
        const DB_PORT = config.get<number>('DB_PORT');
        const DB_USER = config.get<string>('DB_USER');
        const DB_PASS = config.get<string>('DB_PASS');
        const DB_NAME = config.get<string>('DB_NAME');
        return {
          uri: `mongodb://mongodb:mongodb@localhost:27017`,
          dbName: 'airline_reservation',
        };
      },
    }),
    ReservationModule,
    AirlinesModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
