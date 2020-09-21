import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';


export class TaskStatusValidationPipe implements PipeTransform {
  readonly STATUS = [TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE];

  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isValidStatus(value)) {
      throw new BadRequestException(`"${value}" is an invalid status`);
    }
    return value;
  }

  private isValidStatus(status: any): boolean {
    return this.STATUS.includes(status);
  }
}
