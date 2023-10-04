import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // Joga uma HttpException
    throw new HttpException('error!', HttpStatus.BAD_REQUEST);
    // return 'Hello World!';
  }
}
