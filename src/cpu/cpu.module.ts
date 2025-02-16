import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';
import { DiskModule } from 'src/disk/disk.module';

@Module({
  imports: [PowerModule, DiskModule],
  providers: [CpuService],
  exports: [CpuService],
})
export class CpuModule {}
