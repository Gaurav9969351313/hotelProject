const RentalsController = require('./controllers/rental.controller');
const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
const config = require('../common/config/env.config');

const ADMIN = config.permissionLevels.ADMIN;
const PAID = config.permissionLevels.PAID_USER;
const FREE = config.permissionLevels.NORMAL_USER;

exports.routesConfig = function (app) {
    app.post('/rentals', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        RentalsController.insert
    ]);
    app.get('/rentals', [
        RentalsController.list
    ]);
    app.get('/rentals/:rentalId', [
        RentalsController.getById
    ]);
    app.patch('/rentals/:rentalId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        RentalsController.patchById
    ]);
    app.delete('/rentals/:rentalId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        RentalsController.removeById
    ]);
};