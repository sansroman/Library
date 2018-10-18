'use strict';

const Service = require('egg').Service;

class ProblemService extends Service {
    constructor(ctx) {
        super(ctx)
        this.ProblemModel = ctx.model.Problem;

    }

    async getProblemList(limit, offset) {
        const result = await this.ProblemModel.findAndCountAll({
            limit,
            offset,
            attributes:{exclude:['content']}
        });
        return result;
    }
    async getProblemByID(id) {
        return await this.ProblemModel.findById(id);
    }


    async createProblem(data) {
      return await this.ProblemModel.create(data)
    }

    async delProblem(id) {
        const result = await this.ProblemModel.destroy(id);
        return {
            error: true,
            data: result
        }
    }

}

module.exports = ProblemService;
