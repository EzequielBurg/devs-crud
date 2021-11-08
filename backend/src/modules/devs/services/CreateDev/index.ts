import { DevsRepository } from "../../repositories/DevsRepository";
import { CreateDevController } from "./CreateDevController";

export default (): CreateDevController => {
  const devsRepository = new DevsRepository();

  const createDevController = new CreateDevController(devsRepository);

  return createDevController;
};
