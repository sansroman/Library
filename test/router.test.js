'use strict';

const mock = require('egg-mock');
const assert = require('assert');


describe('test/router.test.js', () => {
    let app;
    before(() => {
        app = mock.app({
            baseDir: 'example',
        });
        return app.ready();
    });

    beforeEach(() => app.mockCsrf());
    after(() => app.close());
    afterEach(mock.restore);


});