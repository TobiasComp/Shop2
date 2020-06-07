import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
  WhereBuilder,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Order } from '../models';
import { OrderRepository, OrderProductListRepository } from '../repositories';

export class OrdersController {
  constructor(
    @repository(OrderRepository)
    public orderRepository: OrderRepository,
    // 1 - ADDED THIS REPOSITORY TO THE ORDER CONTROLLER
    @repository(OrderProductListRepository)
    public orderProductListRepository: OrderProductListRepository
  ) { }

  @post('/orders', {
    responses: {
      '200': {
        description: 'Order model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Order) } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, {
            title: 'NewOrder',
            exclude: ['id'],
          }),
        },
      },
    })
    order: Omit<Order, 'id'>,
  ): Promise<Order> {
    return this.orderRepository.create(order);
  }

  @get('/orders/count', {
    responses: {
      '200': {
        description: 'Order model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Order)) where?: Where<Order>,
  ): Promise<Count> {
    return this.orderRepository.count(where);
  }

  @get('/orders', {
    responses: {
      '200': {
        description: 'Array of Order model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Order, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Order)) filter?: Filter<Order>,
  ): Promise<Order[]> {
    return this.orderRepository.find(filter);
  }

  @patch('/orders', {
    responses: {
      '200': {
        description: 'Order PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, { partial: true }),
        },
      },
    })
    order: Order,
    @param.query.object('where', getWhereSchemaFor(Order)) where?: Where<Order>,
  ): Promise<Count> {
    return this.orderRepository.updateAll(order, where);
  }

  @get('/orders/{id}', {
    responses: {
      '200': {
        description: 'Order model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Order, { includeRelations: true }),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Order)) filter?: Filter<Order>
  ): Promise<Order> {
    console.log("Testing the log...");

    return this.orderRepository.findById(id, filter);
  }

  // ADDED ROUTE
  // GET ALL THE ORDERS OF A SPECIFIC USER

  @get('/orders/{id}/user', {
    responses: {
      '200': {
        description: 'Order model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Order, { includeRelations: true }),
          },
        },
      },
    },
  })
  async findByUserId(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(Order)) filter?: Filter<Order>
  ): Promise<any[]> {
    console.log("Testing the log...");
    // 2 - WHERE BUILDER
    let where = new WhereBuilder<Order>();
    // 3 - ORDERLIST FOR THE LIST OF ORDERS
    let orderList: any[] = []
    // 4 - GET ALL THE ORDERS WITH THE ID
    orderList = await this.orderRepository.find({ where: { user_id: id } });
    // 5 - allOrders array
    let allOrders: any[] = [];
    // 6 - LOOP THROUGH AND MAKE QUERIES FOR EACH ORDER


    let orderListPromise = new Promise((resolve, reject) => {
      orderList.forEach(async order => {
        console.log(order);
        let productsForOrder: any[] = []
        productsForOrder = await this.orderProductListRepository.find({ where: { order_id: order.id } })
        allOrders.push(productsForOrder)
      })
      resolve(allOrders)
    })
    orderListPromise.then(aO => {
      console.log(aO);

      return aO
    })
    // RETURN ALL THE ORDERS IN AN ARRAY
    return allOrders;
  }


  @patch('/orders/{id}', {
    responses: {
      '204': {
        description: 'Order PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Order, { partial: true }),
        },
      },
    })
    order: Order,
  ): Promise<void> {
    await this.orderRepository.updateById(id, order);
  }

  @put('/orders/{id}', {
    responses: {
      '204': {
        description: 'Order PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() order: Order,
  ): Promise<void> {
    await this.orderRepository.replaceById(id, order);
  }

  @del('/orders/{id}', {
    responses: {
      '204': {
        description: 'Order DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderRepository.deleteById(id);
  }
}
