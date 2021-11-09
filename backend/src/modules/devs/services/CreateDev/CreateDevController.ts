import { Request, Response } from "express";

import { IDevsRepository } from "../../repositories/IDevsRepository";

export class CreateDevController {
  constructor(private devsRepository: IDevsRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const data = req.body;

    const dev = await this.devsRepository.create(data);

    return res.status(201).json(dev);
  }
}
