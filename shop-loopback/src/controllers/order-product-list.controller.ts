import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
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
import { OrderProductList } from '../models';
import { OrderProductListRepository } from '../repositories';

export class OrderProductListController {
  constructor(
    @repository(OrderProductListRepository)
    public orderProductListRepository: OrderProductListRepository,
  ) { }

  @post('/order-product-lists', {
    responses: {
      '200': {
        description: 'OrderProductList model instance',
        content: { 'application/json': { schema: getModelSchemaRef(OrderProductList) } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderProductList, {
            title: 'NewOrderProductList',
            exclude: ['id'],
          }),
        },
      },
    })
    orderProductList: Omit<OrderProductList, 'id'>,
  ): Promise<OrderProductList> {
    return this.orderProductListRepository.create(orderProductList);
  }

  // THIS IS THE NEW PATH!!!
  // 1 - CHANGED THE ROUTE
  @post('/order-product-lists/arr', {
    responses: {
      '200': {
        description: 'OrderProductList model instance',
        content: { 'application/json': { schema: getModelSchemaRef(OrderProductList) } },
      },
    },
  })
  async createAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderProductList, {
            title: 'NewOrderProductList',
            exclude: ['id'],
          }),
        },
      },
    })
    // 2 - CHANGED THE TYPE TO ARRAY
    orderProductList: Omit<OrderProductList, 'id'>[],
    // 3 - CHANGED THE PROMISE TYPE TO ARRAY
  ): Promise<OrderProductList[]> {
    // 4 - CHANGED THE FUNCTION TO createAll
    return this.orderProductListRepository.createAll(orderProductList);
  }

  @get('/order-product-lists/count', {
    responses: {
      '200': {
        description: 'OrderProductList model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(OrderProductList)) where?: Where<OrderProductList>,
  ): Promise<Count> {
    return this.orderProductListRepository.count(where);
  }

  @get('/order-product-lists', {
    responses: {
      '200': {
        description: 'Array of OrderProductList model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(OrderProductList, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(OrderProductList)) filter?: Filter<OrderProductList>,
  ): Promise<OrderProductList[]> {
    return this.orderProductListRepository.find(filter);
  }

  @patch('/order-product-lists', {
    responses: {
      '200': {
        description: 'OrderProductList PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderProductList, { partial: true }),
        },
      },
    })
    orderProductList: OrderProductList,
    @param.query.object('where', getWhereSchemaFor(OrderProductList)) where?: Where<OrderProductList>,
  ): Promise<Count> {
    return this.orderProductListRepository.updateAll(orderProductList, where);
  }

  @get('/order-product-lists/{id}', {
    responses: {
      '200': {
        description: 'OrderProductList model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(OrderProductList, { includeRelations: true }),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(OrderProductList)) filter?: Filter<OrderProductList>
  ): Promise<OrderProductList> {
    return this.orderProductListRepository.findById(id, filter);
  }

  @patch('/order-product-lists/{id}', {
    responses: {
      '204': {
        description: 'OrderProductList PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrderProductList, { partial: true }),
        },
      },
    })
    orderProductList: OrderProductList,
  ): Promise<void> {
    await this.orderProductListRepository.updateById(id, orderProductList);
  }

  @put('/order-product-lists/{id}', {
    responses: {
      '204': {
        description: 'OrderProductList PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() orderProductList: OrderProductList,
  ): Promise<void> {
    await this.orderProductListRepository.replaceById(id, orderProductList);
  }

  @del('/order-product-lists/{id}', {
    responses: {
      '204': {
        description: 'OrderProductList DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.orderProductListRepository.deleteById(id);
  }
}
