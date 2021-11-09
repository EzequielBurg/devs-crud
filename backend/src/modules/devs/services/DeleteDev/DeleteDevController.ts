import { Request, Response } from "express";

import { IDevsRepository } from "../../repositories/IDevsRepository";

export class DeleteDevController {
  constructor(private devsRepository: IDevsRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const dev = await this.devsRepository.findById(id);

    if (!dev) return res.status(400).json({ error: "Dev not found" });

    await this.devsRepository.delete(id);

    return res.send();
  }
}
