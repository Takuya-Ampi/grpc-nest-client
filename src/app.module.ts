import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CUSTOMERS_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: '127.0.0.1:30043',
          package: 'customers',
          // protoPath: join(__dirname, './proto/customers.proto'),
          protoPath: join(process.cwd(), './proto/customers.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
