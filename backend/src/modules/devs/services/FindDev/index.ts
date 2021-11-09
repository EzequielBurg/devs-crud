import { DevsRepository } from "../../repositories/DevsRepository";
import { FindDevController } from "./FindDevController";

export default (): FindDevController => {
  const devsRepository = new DevsRepository();

  const listDevsController = new FindDevController(devsRepository);

  return listDevsController;
};
