import { Router } from 'express';
import Route from '../../common/routes.interface';
import { CreateCustomerController } from './create-customer/create-customer-controller';

class CustomersRoute implements Route {
  public path = '/customers';
  public router = Router();
  public controller = new CreateCustomerController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller.execute);

  }
}

export default CustomersRoute;