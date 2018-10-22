'use strict';
const LOGIN = 'LOGIN'

const Service = require('egg').Service;

class ScoreService extends Service {
  constructor(ctx) {
    super(ctx)
    this.ScoreModel = ctx.model.Score;

  }
  async getScore(uid) {
    return await this.ScoreModel.sum('value', {
      where: {
        uid
      }
    });
  }

  async recordScore(uid, type, value) {
    return await this.ScoreModel.create({
      uid,
      type,
      value
    });
  }

  async getLastLoginTime(uid) {
    return await this.ScoreModel.findOne({
      where: {
        uid
      },
      order: [
        ['created_at', 'DESC']
      ],
      attributes: ['created_at']
    }).get('created_at');
  }

  async calSignScore(uid) {
    const dates = await this.ScoreModel.findAll({
      where: {
        uid
      },
      order: [
        ['created_at', 'DESC']
      ],
      attributes: ['created_at']
    });
    return dates.map( date => date.get('created_at')).filter( (cur,index,arr) => _checkYesterday(cur, arr[++index])).length + 1
  }

  async checkToday(uid, type) {
    return !await this.ScoreModel.findOne({
      where: {
        $and: [{
            uid,
            type
          },
          this.app.Sequelize.where(
            this.app.Sequelize.fn('DATE', this.app.Sequelize.col('created_at')),
            this.app.Sequelize.literal('CURRENT_DATE')
          )
        ]
      }
    });
  }

}

function _checkYesterday(cur, yes){
  const curDate = new Date(cur);
  const yesDate = new Date(yes);
  return new Date(curDate.setDate(curDate.getDate() - 1)).getDate() === yesDate.getDay()
}

module.exports = ScoreService;
