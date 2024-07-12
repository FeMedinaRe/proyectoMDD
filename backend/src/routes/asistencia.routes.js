"use strict";
// Importa el modulo 'express' para crear las rutas
import { Router } from "express";

import {updateAsistencia} from "../controllers/asistencia.controller.js";

import { isMiembroCCEE} from "../middlewares/auth.middleware.js";

const router = Router();

router.put("/:id", isMiembroCCEE, updateAsistencia);

export default router;