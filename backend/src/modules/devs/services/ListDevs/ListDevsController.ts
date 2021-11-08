import { Request, Response } from "express";

import { IDevsRepository } from "../../repositories/IDevsRepository";

export class ListDevsController {
  constructor(private devsRepository: IDevsRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const devs = await this.devsRepository.list();

    return res.json(devs);
  }
}
