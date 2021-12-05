import { Injectable } from '@nestjs/common';
import * as data from '../data.json'

@Injectable()
export class AppService {
  getHello(): string {
    return "";
  }
}
