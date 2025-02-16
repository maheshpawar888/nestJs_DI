import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService], // By Default PowerService is Private and cannot be accessible by any other module and service
  exports: [PowerService], // By using this line we are making this service file available for use
})
export class PowerModule {}
