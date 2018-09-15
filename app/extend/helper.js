module.exports = {
  async getCount(model) {
    let result;
    if (Array.isArray(model)) {
      result = {}
      await Promise.all(model.map(async e => {
        result[e.name] = {
          count: await e.count()
        }
      }))
    } else result = await model.count()
    return result;
  },
  async getCountByTimeRange(model, time) {
    let result;

    if (Array.isArray(model)) {
      result = {}
      await Promise.all(model.map(async e => {
        result[e.name] = await e.findAll({
          where: {
            created_at: {
              [this.app.Sequelize.Op.gt]: new Date() - time * 24 * 60 * 60 * 1000,
              [this.app.Sequelize.Op.lt]: new Date()
            }
          },
          attributes: [
            [this.app.Sequelize.fn('DAY', this.app.Sequelize.col('created_at')), 'dates'],
            [this.app.Sequelize.fn('count', this.app.Sequelize.col('created_at')), 'count']
          ],
          group: [this.app.Sequelize.fn('DAY', this.app.Sequelize.col('created_at'))],
          order:[[this.app.Sequelize.literal('dates'), 'DESC']]
        })
      }))
    } else {
      result = await model.findAll({
        where: {
          created_at: {
            [this.app.Sequelize.Op.gt]: new Date() - time * 24 * 60 * 60 * 1000,
            [this.app.Sequelize.Op.lt]: new Date()
          }
        },
        attributes: [
          [this.app.Sequelize.fn('DAY', this.app.Sequelize.col('created_at')), 'dates'],
          [this.app.Sequelize.fn('count', this.app.Sequelize.col('created_at')), 'count']
        ],
        group: [this.app.Sequelize.fn('DAY', this.app.Sequelize.col('created_at'))],
        order:[[this.app.Sequelize.literal('dates'), 'DESC']]

      })
    }
    return result;
  }
};

