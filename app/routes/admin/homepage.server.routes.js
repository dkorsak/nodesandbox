'use strict';

module.exports = function (app) {
    // Root routing
    var admin = require('../../../app/controllers/admin/homepage.server.controller');
    app.route('/admin').get(admin.homepage);
};