import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Material } from './material.schema';

@Injectable()
export class MaterialsService {
  constructor(
    @InjectModel(Material.name) private materialModel: Model<Material>,
  ) {}

  async findAll(): Promise<Material[]> {
    return this.materialModel.find().exec();
  }

  async create(materialData: Partial<Material>): Promise<Material> {
    const material = new this.materialModel(materialData);
    return material.save();
  }
} 