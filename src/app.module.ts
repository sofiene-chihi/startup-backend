import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StartupModule } from './startup/startup.module';
import { OwnerModule } from './owner/owner.module';
import { TestimonyModule } from './testimony/testimony.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './owner/owner.entity';
import { Startup } from './startup/startup.entity';
import { Testimony } from './testimony/testimony.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sofiene',
      database: 'startup',
      entities: [Startup, Owner, Testimony],
      synchronize: true,
    }),
    StartupModule, OwnerModule, TestimonyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
