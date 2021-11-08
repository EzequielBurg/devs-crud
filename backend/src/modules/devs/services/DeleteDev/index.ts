import { DevsRepository } from "../../repositories/DevsRepository";
import { DeleteDevController } from "./DeleteDevController";

export default (): DeleteDevController => {
  const devsRepository = new DevsRepository();

  const createDevController = new DeleteDevController(devsRepository);

  return createDevController;
};
