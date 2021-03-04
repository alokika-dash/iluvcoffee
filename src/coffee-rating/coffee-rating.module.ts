import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeesModule } from '../coffees/coffees.module';
import { DatabaseModule } from '../database/database.module';
import appConfig from '../config/app.config';

@Module({
  imports: [
    ConfigModule,
    CoffeesModule,
    // DatabaseModule.register({
    //   type: 'postgres',
    //   host: process.env.DATABASE_HOST,
    //   username: process.env.DATABASE_USER,
    //   password: process.env.DATABASE_PASSWORD,
    //   port: +process.env.DATABASE_PORT,
    // }),
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
