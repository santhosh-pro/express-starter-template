import { NextFunction, Request, Response } from 'express';

export class CreateCustomerController {

    public execute= async (req: Request, res: Response, next: NextFunction) => {
        try {
          res.status(200).json({ data: 'findAllUsersData', message: 'findAll' });
        } catch (error) {
          next(error);
        }
      };
}
