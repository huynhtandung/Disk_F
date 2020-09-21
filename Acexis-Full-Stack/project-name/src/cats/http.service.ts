import { Injectable, Optional, Inject } from '@nestjs/common';
import { Cat } from './cats.interface';

@Injectable()
export class HttpService<T> {
  constructor(
    @Optional() @Inject('HTTP_OPTIONS') private httpClient: T,
  ) { }

  getHttpClient(msg){
    this.httpClient = msg;
    return this.httpClient;
  }
}