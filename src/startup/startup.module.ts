import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StartupController } from './startup.controller';
import { Startup } from './startup.entity';
import { StartupService } from './startup.service';

@Module({
  imports: [TypeOrmModule.forFeature([Startup])],
  controllers: [StartupController],
  providers: [StartupService]
})
export class StartupModule {}
