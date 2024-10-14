import { Module } from '@nestjs/common';
import { SchedulerController } from './scheduler.controller';
import { SchedulerService } from './scheduler.service';
import { HttpPingProcessor } from './processors/httpPing.processor';
import { BullModule } from '@nestjs/bullmq';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    BullModule.registerQueue({
        name: 'httpPingQueue',
    }),
    ScheduleModule.forRoot(),
  ],
  controllers: [SchedulerController],
  providers: [SchedulerService, HttpPingProcessor],
  exports: [SchedulerService],
})
export class SchedulerModule {}