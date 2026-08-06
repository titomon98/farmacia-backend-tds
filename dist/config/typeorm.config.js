"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const config_1 = require("@nestjs/config");
exports.typeOrmConfig = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: (config) => ({
        type: 'postgres',
        host: config.getOrThrow<string>('DB_HOST'),
        port: parseInt(config.getOrThrow<string>('DB_PORT'), 10),
        username: config.getOrThrow<string>('DB_USERNAME'),
        password: config.getOrThrow<string>('DB_PASSWORD'),
        database: config.getOrThrow<string>('DB_NAME'),
        schema: config.getOrThrow<string>('DB_SCHEMA'),
        autoLoadEntities: true,
        synchronize: config.getOrThrow<string>('DB_SYNCHRONIZE'),
        logging: config.getOrThrow<string>('DB_LOGGING'),
        ssl: config.getOrThrow<string>('DB_SSL') === 'true'
            ? { rejectUnauthorized: false }
            : false
    }),
};
//# sourceMappingURL=typeorm.config.js.map