import { Router } from "express";

import createDevController from "../modules/devs/services/CreateDev";
import deleteDevController from "../modules/devs/services/DeleteDev";
import findDevController from "../modules/devs/services/FindDev";
import listDevsController from "../modules/devs/services/ListDevs";
import updateDevController from "../modules/devs/services/UpdateDev";

export const devsRoutes = Router();

devsRoutes.get("", (req, res) => listDevsController().handle(req, res));
devsRoutes.get("/:id", (req, res) => findDevController().handle(req, res));
devsRoutes.post("", (req, res) => createDevController().handle(req, res));
devsRoutes.put("/:id", (req, res) => updateDevController().handle(req, res));
devsRoutes.delete("/:id", (req, res) => deleteDevController().handle(req, res));
