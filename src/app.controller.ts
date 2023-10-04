import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { ErrorHandling } from './config/error-handling';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    try {
      return this.appService.getHello();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get('hello2')
  getHello2(): string {
    try {
      return this.appService.getHello();
    } catch (error) {
      // usando ErrorHandling (class custom pra tratar os erros)
      throw new ErrorHandling(error);
    }
  }
}
