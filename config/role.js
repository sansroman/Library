'use strict';
module.exports = function(app) {
  app.role.use('admin', ctx => {
    return ctx.session.user && ctx.session.user.isAdmin;
  });

  app.role.use('logged', ctx => {
    return ctx.session.user !== undefined;
  });


};