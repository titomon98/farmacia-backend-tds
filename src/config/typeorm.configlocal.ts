import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    type: 'postgres' as const,
    host: config.getOrThrow<string>('DB_HOST'),
    port: parseInt(config.getOrThrow<string>('DB_PORT'), 10),
    username: config.getOrThrow<string>('DB_USERNAME'),
    password: config.getOrThrow<string>('DB_PASSWORD'),
    database: config.getOrThrow<string>('DB_DATABASE'),
    schema: config.getOrThrow<string>('DB_SCHEMA'),
    autoLoadEntities: true,
    synchronize: config.getOrThrow<string>('DB_SYNCHRONIZE') === 'true',
    logging: config.getOrThrow<string>('DB_LOGGING') === 'true',
    ssl: config.getOrThrow<string>('DB_SSL') === 'true'
      ? { rejectUnauthorized: false }
      : false,
  }),
};