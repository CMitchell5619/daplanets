import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SpeciesPlanetService {
    async delete(id) {
        return await dbContext.SpeciesPlanet.findByIdAndDelete(id)
    }
    async create(body) {
        return await dbContext.SpeciesPlanet.create(body)
    }
    async find(query = {}) {
        return await dbContext.SpeciesPlanet.find(query).populate("species galaxy");
    }

}

export const speciesPlanetService = new SpeciesPlanetService();
