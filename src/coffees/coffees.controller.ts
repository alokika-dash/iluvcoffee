import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
  Request,
  SetMetadata,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { REQUEST } from '@nestjs/core';
import { Public } from '../common/decorators/public.decorator';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { Protocol } from '../common/decorators/protocol.decorator';
import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

//@UsePipes(new ValidationPipe()) // Use classes instead of instances as Pipes to reduce memory usage
@Controller('coffees')
@ApiTags('coffees')
export class CoffeesController {
  constructor(
    private readonly coffeesService: CoffeesService,
    @Inject(REQUEST) private readonly request: Request,
  ) {
    console.log('CoffeeController Created');
  }

  @Public()
  @Get()
  async findAll(
    //@Protocol('https') protocol: string,
    @Query() paginationQueryDto: PaginationQueryDto,
  ) {
    //const { limit, offset } = paginationQueryDto;
    //return `This action returns all coffees. Limit= ${limit}, offset= ${offset}`;
    //`await new Promise((resolve) => setTimeout(resolve, 5000));
    //console.log('protocol:' + protocol);
    return this.coffeesService.findAll(paginationQueryDto);
  }

  @Get(':id')
  //@ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    //console.log(id);
    return this.coffeesService.findOne('' + id);
    //return `This action returns ${id} coffee`;
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.coffeesService.create(createCoffeeDto);
    //return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
    //return `This action updates ${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
    //return `This action deletes ${id} coffee`;
  }
}
