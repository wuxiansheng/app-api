import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'this is  homepage!!!';
  }
  getAbout(): string {
    return 'this is about!';
  }
}
