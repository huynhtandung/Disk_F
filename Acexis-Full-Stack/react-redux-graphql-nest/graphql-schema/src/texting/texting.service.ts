import { Injectable } from '@nestjs/common';
import { Texting, InputTexting } from '../graphql';

@Injectable()
export class TextingService {
  private texting: Texting[] = [];

  getTexting() {
    return this.texting;
  }

  createTexting(inputTexting: InputTexting) {
    const text: Texting = {
      content: inputTexting.content,
      roomID: inputTexting.roomID,
    };
    this.texting.push(text);
    return text;
  }
}
