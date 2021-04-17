import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fastifyMongodb from 'fastify-mongodb';
import fastifyPlugin from 'fastify-plugin';

async function dbConnector(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify
    .register(fastifyMongodb, {
      // force to close the mongodb connection when app stopped
      forceClose: true,
      url: process.env.MONGO_URL,
    })
    .after((error) => {
      if (error) {
        fastify.log.error('error connecting to Mongo');
        fastify.log.error(error);
      }
      fastify.log.info('Connected to MongoDB');
    });
}

export = fastifyPlugin(dbConnector, {
  name: 'dbConnector',
});
