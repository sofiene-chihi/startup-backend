import { Controller, Get } from '@nestjs/common';
import { Startup } from './startup.entity';
import { StartupService } from './startup.service';

@Controller('startup')
export class StartupController {

    constructor(private readonly startupService: StartupService) {}

    @Get('all')
    all(): Promise<Startup[]> {
      return this.startupService.findAll();
    }

}
