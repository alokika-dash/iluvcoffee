import { Module, Scope } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
//import { COFFEE_BRANDS } from './coffees.constants';
//import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

// class MockCoffeeService {}
// class ConfigService {}
// class DevelopmentConfigService {}
// class ProductionConfigService {}

// @Injectable()
// export class CoffeeBrandFactory {
//   create() {
//     /* Do something */
//     return ['buddy brew', 'nescafe'];
//   }
// }

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ], // 👈 Adding Coffee Entity here to TypeOrmModule.forFeature
  controllers: [CoffeesController],
  providers: [CoffeesService],
  // [     CoffeesService,
  /// UseValue Example
  // {
  //   /**
  //    * Injection token
  //    */
  //   provide: CoffeesService,
  //   /**
  //    * Type (class name) of provider (instance to be injected).
  //    */
  //   useValue: new MockCoffeeService(),
  // },
  // UseClass example
  // {
  //   provide: ConfigService,
  //   useClass:
  //     process.env.NODE_ENV === 'development'
  //       ? DevelopmentConfigService
  //       : ProductionConfigService,
  // },
  //{ provide: COFFEE_BRANDS, useValue: ['buddy brew', 'nescafe'] },
  // useFactory Example
  // CoffeeBrandFactory,
  //{
  //  provide: COFFEE_BRANDS,
  //  useFactory: (brandsFactory: CoffeeBrandFactory) => brandsFactory.create(),
  //  inject: [CoffeeBrandFactory],
  //},
  // Example Async useFactory example
  // {
  //   provide: COFFEE_BRANDS,
  //   // Note "async" here, and Promise/Async event inside the Factory function
  //   // Could be a database connection / API call / etc
  //   // In our case we're just "mocking" this type of event with a Promise
  //   // useFactory: async (connection: Connection): Promise<string[]> => {
  //   //   // const coffeeBrands = await connection.query('SELECT * from flavors');
  //   //   const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
  //   //   console.log(coffeeBrands);
  //   //   return coffeeBrands;
  //   // },
  //   useFactory: () => ['buddy brew', 'nescafe'],
  //   scope: Scope.TRANSIENT,
  //   inject: [Connection],
  // },
  // ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
