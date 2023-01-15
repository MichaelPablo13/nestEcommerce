import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { Order } from './models/order.entity';
import { OrdersService } from './models/orders.service';
import { Product } from './models/product.entity';
import { ProductsService } from './models/products.service';
import { User } from './models/user.entity';
import { UsersService } from './models/users.service';
import { ProductsController } from './products.controller';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Product, User, Order]),
    AdminModule,
    AuthModule,
    CartModule,
    AccountModule
  ],
  controllers: [AppController, ProductsController],
  providers: [ProductsService, UsersService, OrdersService],
  exports: [ProductsService, UsersService, OrdersService],
})
export class AppModule { }
