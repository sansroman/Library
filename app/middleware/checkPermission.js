module.exports = permission => {
  return async function checkLogin(ctx, next) {
    const user = ctx.session.currentUser;
    if (!user) return ctx.body = ctx.response.ServerResponse.createByErrorCodeMsg(ctx.response.ResponseCode.NEED_LOGIN, '用户未登录');
    else {
      if (user.role !== permission) return ctx.body = ctx.response.ServerResponse.createByErrorCodeMsg(ctx.response.ResponseCode.NO_AUTH, '没有相关权限');
    }
    await next()
  };
};