import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MaterialsService } from './materials.service';
import { MaterialsController } from './materials.controller';
import { Material, MaterialSchema } from './material.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Material.name, schema: MaterialSchema }])
  ],
  controllers: [MaterialsController],
  providers: [MaterialsService],
})
export class MaterialsModule {} 