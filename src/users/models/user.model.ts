import { Schema } from '@nestjs/mongoose';

@Schema
export class User {
  email: string;
  password: string;
}
