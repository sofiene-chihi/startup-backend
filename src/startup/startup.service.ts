import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStartupDto } from './dto/createStartup.dto';
import { Startup } from './startup.entity';
import * as data from '../../data.json';

@Injectable()
export class StartupService {
  constructor(
    @InjectRepository(Startup) private startupRepository: Repository<Startup>,
  ) {}

  async findAll(): Promise<Startup[]> {
    return await this.startupRepository.find({
      take: 100,
    });
  }
}
