import { App } from "./app";
import CustomersRoute from "./use-cases/customer-use-case/customers.route";

const app = new App(
  [new CustomersRoute(),
]);

app.listen();

