import { Router } from "express";

import { devsRoutes } from "./devs.routes";

export const routes = Router();

routes.use(devsRoutes);
