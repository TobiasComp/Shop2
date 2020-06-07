import {DefaultCrudRepository} from '@loopback/repository';
import {User, UserRelations} from '../models';
import {ShopDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.Shop') dataSource: ShopDataSource,
  ) {
    super(User, dataSource);
  }
}
