"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const config_1 = require("@nestjs/config");
exports.typeOrmConfig = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: (config) => ({
        type: 'postgres',
        host: config.get('DB_HOST', 'localhost'),
        port: Number(config.get('DB_PORT', '5432')),
        username: config.get('DB_USERNAME', ''),
        password: config.get('DB_PASSWORD', ''),
        database: config.get('DB_DATABASE', 'farmacia_tds'),
        schema: config.get('DB_SCHEMA', 'farmacia'),
        autoLoadEntities: true,
        synchronize: config.get('DB_SYNCHRONIZE', 'false') === 'true',
        logging: config.get('DB_LOGGING', 'false') === 'true',
    }),
};
//# sourceMappingURL=typeorm.config.js.map