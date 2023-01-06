import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { Product } from './models/product.entity';
import { ProductsService } from './models/products.service';
import { ProductsController } from './products.controller';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Product]),
    AdminModule
  ],
  controllers: [AppController, ProductsController, AdminController],
  providers: [ProductsService],
  exports: [ProductsService]
})
export class AppModule { }
