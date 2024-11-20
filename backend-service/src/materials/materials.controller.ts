import { Controller, Get, Post, Body } from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { Material } from './material.schema';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Get()
  async findAll(): Promise<Material[]> {
    return this.materialsService.findAll();
  }

  @Post()
  async create(@Body() material: Partial<Material>): Promise<Material> {
    return this.materialsService.create(material);
  }
} 