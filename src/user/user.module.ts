import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserServiceService } from './user-service.service';

import { User } from './user.entity';
import { UsersController } from './users.controller';



@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UserServiceService],
})
export class UserModule {

constructor (private readonly configService:ConfigService){}
// console.log(configService.get<Number>("PORT"));
// console.log(configService.get<boolean>("LOGGING"));

}
