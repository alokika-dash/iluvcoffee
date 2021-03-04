import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Coffee } from '../coffees/entities/coffee.entity';
import { CoffeesService } from '../coffees/coffees.service';

@Injectable()
export class CoffeeRatingService {
  constructor(private readonly coffeeService: CoffeesService) {}
}
