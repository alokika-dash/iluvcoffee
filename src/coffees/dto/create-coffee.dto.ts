import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCoffeeDto {
  @IsString()
  @ApiProperty({ description: 'The name of a coffee.' })
  readonly name: string;

  @IsString()
  @ApiProperty({ description: 'The brand of a coffee.' })
  readonly brand: string;

  @IsString({ each: true })
  @ApiProperty({ example: ['chocolate', 'vanilla'] })
  readonly flavors: string[];
}
