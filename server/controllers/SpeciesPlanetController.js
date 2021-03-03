import express from "express";
import BaseController from "../utils/BaseController";
import { speciesPlanetService } from "../services/SpeciesPlanetService";

export class SpeciesPlanetController extends BaseController {
    constructor() {
        super("api/studentclassrooms");
        this.router
            .post("", this.create)
            .delete("/:id", this.delete)
    }

    async create(req, res, next) {
        try {
            res.send(201, await speciesPlanetService.create(req.body));
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            res.send(await speciesPlanetService.delete(req.params.id));
        } catch (error) {
            next(error);
        }
    }
}