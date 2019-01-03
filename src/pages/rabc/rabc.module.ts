import { Module } from '@nestjs/common';
import { RabcController } from './rabc.controller';

@Module({
  controllers: [RabcController],
  providers: [],
})
export class RabcModule {
}
