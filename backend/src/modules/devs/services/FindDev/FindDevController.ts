import { Request, Response } from "express";

import { IDevsRepository } from "../../repositories/IDevsRepository";

export class FindDevController {
  constructor(private devsRepository: IDevsRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const devs = await this.devsRepository.findById(id);

    return res.json(devs);
  }
}
