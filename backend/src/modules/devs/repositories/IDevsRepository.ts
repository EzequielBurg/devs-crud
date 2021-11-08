import { ICreateDevDTO } from "../dtos/ICreateDevDTO";
import { IUpdateDevDTO } from "../dtos/IUpdateDevDTO";
import { Dev } from "../entities/Dev";

export interface IDevsRepository {
  list(): Promise<Dev[]>;
  findById(id: string): Promise<Dev>;
  create(dev: ICreateDevDTO): Promise<Dev>;
  update(dev: IUpdateDevDTO): Promise<Dev>;
  delete(id: string): Promise<void>;
}
