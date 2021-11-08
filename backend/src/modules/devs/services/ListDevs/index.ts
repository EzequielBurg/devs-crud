import { DevsRepository } from "../../repositories/DevsRepository";
import { ListDevsController } from "./ListDevsController";

export default (): ListDevsController => {
  const devsRepository = new DevsRepository();

  const listDevsController = new ListDevsController(devsRepository);

  return listDevsController;
};
