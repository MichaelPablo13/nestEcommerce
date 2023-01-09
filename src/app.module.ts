import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { AuthController } from './auth/auth.controller';
import { Product } from './models/product.entity';
import { ProductsService } from './models/products.service';
import { User } from './models/user.entity';
import { UsersService } from './models/users.service';
import { ProductsController } from './products.controller';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Product, User]),
    AdminModule,
  ],
  controllers: [AppController, ProductsController, AdminController, AuthController],
  providers: [ProductsService, UsersService],
  exports: [ProductsService, UsersService],
})
export class AppModule { }
