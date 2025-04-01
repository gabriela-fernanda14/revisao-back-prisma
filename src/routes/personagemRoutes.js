import express from "express";
import PersonagemController from "../controllers/personagemController.js";

const personagensRouter = express.Router();

// Rotas de personagens
// GET /api/personagens - Listar todos os personagens
personagensRouter.get("/", PersonagemController.getAllPersonagens);

// GET /api/personagems/:id - Obter um personagem pelo ID
personagensRouter.get("/:id", PersonagemController.getPersonagemById);

// POST /api/personagems - Criar um novo personagem
personagensRouter.post("/", PersonagemController.createPersonagem);

// PUT /api/personagems/:id - Atualizar um personagem
personagensRouter.put("/:id", PersonagemController.updatePersonagem);

// DELETE /api/personagens/:id - Remover um personagem
personagensRouter.delete("/:id", PersonagemController.deletePersonagem);

export default personagensRouter;

