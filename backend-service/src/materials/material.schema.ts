import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Material extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;

  @Prop({ type: Object })
  schema: Record<string, any>;

  @Prop({ type: Object })
  props: Record<string, any>;
}

export const MaterialSchema = SchemaFactory.createForFeature(Material); 