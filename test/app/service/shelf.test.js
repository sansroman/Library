'use strict';

const assert = require('assert');
const mock = require('egg-mock');
describe('test/app/service/shelf.test.js', () => {
  let app;
  let ctx;
  before(async function() {
    app = mock.app();
    await app.ready();
    ctx = app.mockContext();
    await ctx.model.sync({
      force: true,
    });

  });
  describe('Shelf', () => {
    before(async function() {
      await ctx.model.User.bulkCreate([{
        email:'sansroman@foxmail.com',
        password:'123456',
        name: 'someone',
        avatar: 'www.baidu,com',
        signature: '情之所钟,正在我辈',
        role: 1
      }]);
      await ctx.model.Shelf.bulkCreate([{
        uid:1,
        name: 'firstShelf',
        avatar: 'www.baidu,com'
      },{
        uid:1,
        name: 'secondShelf',
        avatar: 'www.baidu,com'
      }]);
    });
    after(async function() {
      await ctx.model.sync({
        force: true,
      });
    });

    it('should get shelf list is empty',async function () {
        const data = await ctx.service.shelfService.getShelfList(0);
        assert(data.length === 0);
    })
    it('should get shelf list',async function () {
        const data = await ctx.service.shelfService.getShelfList(1);
        assert(data.length === 2);
        assert(data[0].get('name') === 'firstShelf');
        assert(data[0].get('avatar') === 'www.baidu,com');
    })
    it('should create shelf succeed' async function(){

    }
    it('should update shelf failure,shelf id is not exist' async function(){

    }
    it('should update shelf succeed ' async function(){

    }
    it('should delete shelf succeed ' async function(){

    }
    it('should delete shelf failure,shelf id is not exist' async function(){

    }
  });

});