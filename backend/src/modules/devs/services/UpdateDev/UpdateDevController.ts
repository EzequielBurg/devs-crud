import { Request, Response } from "express";

import { IDevsRepository } from "../../repositories/IDevsRepository";

export class UpdateDevController {
  constructor(private devsRepository: IDevsRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { nome, sexo, idade, hobby, datanascimento } = req.body;

    const dev = await this.devsRepository.findById(id);

    if (!dev) return res.status(400).json({ error: "Dev not found" });

    const devUdated = await this.devsRepository.update({
      id,
      nome,
      sexo,
      idade,
      hobby,
      datanascimento,
    });

    return res.json(devUdated);
  }
}
