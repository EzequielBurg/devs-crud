import { DevsRepository } from "../../repositories/DevsRepository";
import { UpdateDevController } from "./UpdateDevController";

export default (): UpdateDevController => {
  const devsRepository = new DevsRepository();

  const createDevController = new UpdateDevController(devsRepository);

  return createDevController;
};
