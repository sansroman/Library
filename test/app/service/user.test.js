'use strict';

const assert = require('assert');
const mock = require('egg-mock');
describe('test/app/service/user.test.js', () => {
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
  describe('User', () => {
    before(async function() {
      await ctx.model.User.bulkCreate([{
        email:'sansroman@foxmail.com',
        password:'123456',
        name: 'someone',
        avatar: 'www.baidu,com',
        signature: '情之所钟,正在我辈',
        role: 1,
        created_at: '2018-05-05T06:38:16.498Z',
        updated_at: '2018-05-05T06:38:16.498Z',
      }]);

    });
    after(async function() {
      await ctx.model.sync({
        force: true,
      });
    });

    it('should create success', async function() {
      const data = await ctx.service.userService.register('tboevil@gmail.com','password','');
      assert(data[0].get('id') === 2); // 判断测试通过的判定条件
      assert(data[0].get('email') === 'tboevil@gmail.com');
    });
    it('should is existed', async function() {
      const data = await ctx.service.userService.register('sansroman@foxmail.com','password','');
      assert(data[data.length-1] === false);
    });
        it('should get userInfo success', async function() {
            const data = await ctx.service.userService.getUserInfo('sansroman@foxmail.com');
            assert(data.get('id') === 1);
        });
    it('should user doesnt exit', async function() {
        const data = await ctx.service.userService.getUserInfo('test@foxmail.com');
        assert(data === null);
    });
    it('should update personal info success', async function() {
        const data = await ctx.service.userService.updateUserInfo('sansroman@foxmail.com','yonghe','www.google.com','sign');
        assert(data[0] === 1);
    });
    it('should update failure because user doesnt exit', async function() {
        const data = await ctx.service.userService.updateUserInfo('test@foxmail.com','yonghe','www.google.com','sign');
        assert(data[0] === 0);
    });
    it('should get changed userInfo', async function() {
        const data = await ctx.service.userService.getUserInfo('sansroman@foxmail.com');
        assert(data.get('name') === 'yonghe');
    });
    it('should changed password success', async function() {
        const data = await ctx.service.userService.changePwd('sansroman@foxmail.com','123123');
        assert(data[0] === 1);
    });

  });

});