import express from "express";
import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService";

export class PlanetsController extends BaseController {
    constructor() {
        super("api/planets");
        this.router
          .get("", this.getAll)
          .post("", this.create);
      }
      async getAll(req, res, next) {
        try {
          return res.send(await planetsService.find(req.query));
        } catch (error) {
          next(error);
        }
      }
      async create(req, res, next) {
        try {
          res.send(201, await planetsService.create(req.body));
        } catch (error) {
          next(error);
        }
      }
}