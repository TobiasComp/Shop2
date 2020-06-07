import {DefaultCrudRepository} from '@loopback/repository';
import {OrderProductList, OrderProductListRelations} from '../models';
import {ShopDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrderProductListRepository extends DefaultCrudRepository<
  OrderProductList,
  typeof OrderProductList.prototype.id,
  OrderProductListRelations
> {
  constructor(
    @inject('datasources.Shop') dataSource: ShopDataSource,
  ) {
    super(OrderProductList, dataSource);
  }
}
