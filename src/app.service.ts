import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface CustomerService  {
  GetAll({}): Observable<any>;
}

@Injectable()
export class AppService implements OnModuleInit {
  private customerService: CustomerService;

  constructor(@Inject('CUSTOMERS_PACKAGE') private client: ClientGrpc) {}
  onModuleInit() {
    this.customerService = this.client.getService<CustomerService>('CustomerService');
  }

  getHello(): string {
    return 'Hello World!';
  }
  GetAll(): Observable<any>  {
    console.log('iii')
    return this.customerService.GetAll({})
  }
}
