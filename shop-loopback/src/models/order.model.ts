import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      table: 'orders'
    }
  }
})
export class Order extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  date?: string;

  @property({
    type: 'number',
  })
  total_price?: number;

  @property({
    type: 'number',
    required: true,
  })
  user_id: number;


  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
