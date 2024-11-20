import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MaterialsModule } from './materials/materials.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/lowcode'),
    MaterialsModule,
  ],
})
export class AppModule {} 