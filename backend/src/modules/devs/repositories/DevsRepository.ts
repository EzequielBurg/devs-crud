import { getRepository, Repository } from "typeorm";

import { ICreateDevDTO } from "../dtos/ICreateDevDTO";
import { IUpdateDevDTO } from "../dtos/IUpdateDevDTO";
import { Dev } from "../entities/Dev";
import { IDevsRepository } from "./IDevsRepository";

export class DevsRepository implements IDevsRepository {
  private repository: Repository<Dev>;

  constructor() {
    this.repository = getRepository(Dev);
  }

  async list(): Promise<Dev[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Dev> {
    return this.repository.findOne(id);
  }

  async create(dev: ICreateDevDTO): Promise<Dev> {
    const newDev = this.repository.create(dev);

    await this.repository.save(newDev);

    return newDev;
  }

  async update(dev: IUpdateDevDTO): Promise<Dev> {
    const devUpdated = await this.repository.save(dev);

    return devUpdated;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
