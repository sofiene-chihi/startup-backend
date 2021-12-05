import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStartupDto } from './dto/createStartup.dto';
import { Startup } from './startup.entity';
import * as data from "../../data.json"

@Injectable()
export class StartupService {

    constructor(
        @InjectRepository(Startup) private startupRepository: Repository<Startup>,
      ) {}
    
      async findAll(): Promise<Startup[]> {
        return await this.startupRepository.find();
      }


      async createStartup(): Promise<Startup[]> {

        const newStartups : Startup[] = data.map((startup : CreateStartupDto)=>{
            return this.startupRepository.create(startup)
        })
    
        return await this.startupRepository.save(newStartups);
      }
}
