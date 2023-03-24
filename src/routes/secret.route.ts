import { Router } from "express";

import controllers from "../controllers";
const router = Router();

export function SecretRoutes() {
    router.get("/", controllers.SecretService.getSecret);
    return router;
}