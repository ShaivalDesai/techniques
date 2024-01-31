import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './user/user.entity';
import { UsersController } from './user/users.controller';

@Module({
  imports:[
    ConfigModule.forRoot({
    isGlobal:true,
    envFilePath:".local.env"
    
  }),
TypeOrmModule.forRoot(
  {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'Shaival',
    entities: [User],
    synchronize: true,
  }
),


UserModule
],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {


  constructor(private dataSource: DataSource) {}
}
