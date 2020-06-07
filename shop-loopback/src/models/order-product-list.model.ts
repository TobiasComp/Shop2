import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    strict: true,
    mysql: {
      table: 'order_product_list'
    }
  }
})
export class OrderProductList extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  order_id: number;

  @property({
    type: 'number',
    required: true,
  })
  product_id: number;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
  })
  date?: string;


  constructor(data?: Partial<OrderProductList>) {
    super(data);
  }
}

export interface OrderProductListRelations {
  // describe navigational properties here
}

export type OrderProductListWithRelations = OrderProductList & OrderProductListRelations;
