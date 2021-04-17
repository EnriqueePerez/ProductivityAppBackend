import { FastifyInstance } from 'fastify';
import { DotenvSchema } from './dotenvSchema';

declare module 'fastify' {
  interface FastifyInstance {
    config: DotenvSchema;
  }
}
