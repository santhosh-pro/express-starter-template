import Route from "./common/routes.interface";
import express from 'express';

export class App {
    public app: express.Application;
    public port: string | number;

    constructor(routes: Route[]) {
      this.port = process.env.PORT || 3000;
        this.initializeRoutes(routes);
    }

    private initializeRoutes(routes: Route[]) {
        routes.forEach(route => {
          this.app.use('/', route.router);
        });
      }

      public listen() {
        this.app.listen(this.port, () => {
          console.log(`🚀 App listening on the port ${this.port}`);
        });
      }
}