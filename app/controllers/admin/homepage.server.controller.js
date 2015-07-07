'use strict';

/**
 * Module dependencies.
 */
exports.homepage = function (req, res) {
    res.render('admin/homepage', {
        user: req.user || null,
        request: req
    });
};