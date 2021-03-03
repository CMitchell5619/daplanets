import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {
    async create(body) {
        return await dbContext.Planets.create(body)
      }
      async find(query={}) {
        let planets = await dbContext.Planets.find(query);
        return planets;
      }
      async findById(id) {
        let planet = await dbContext.Planets.findById(id);
        if (!planet) {
          throw new BadRequest("Invalid Id");
        }
        return planet;
      }
}

export const planetsService = new PlanetsService();