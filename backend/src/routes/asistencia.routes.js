"use strict";
// Importa el modulo 'express' para crear las rutas
import { Router } from "express";

import {updateAsistencia, getAsistentes} from "../controllers/asistencia.controller.js";

import { isMiembroCCEE} from "../middlewares/auth.middleware.js";

const router = Router();

router.put("/update", isMiembroCCEE, updateAsistencia);
router.get("/asistentes", isMiembroCCEE, getAsistentes);

export default router;