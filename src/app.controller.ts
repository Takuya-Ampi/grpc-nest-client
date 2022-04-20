import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

interface CreateCustomerDto {
  name: string
  age: number
  address: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('grpc')
  call(): Observable<any> {
    console.log('aaa')
    return this.appService.GetAll();
  }
  // @Post('grpc')
  // insert(@Body() createCustomerDto: CreateCustomerDto): Observable<any> {
  //   return this.appService.createOne(createCustomerDto);
  // }
}
