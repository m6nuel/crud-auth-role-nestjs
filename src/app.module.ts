import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_crud',
      password: 'root',
      database: 'db_crud',
      // entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    CatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
