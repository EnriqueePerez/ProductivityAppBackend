import { FastifyReply, FastifyRequest, FastifyInstance } from 'fastify';
import { CreateTaskSchema } from '../types/createTaskSchema';
import server from '../index';

export const createTask = async (
  request: FastifyRequest<{ Body: CreateTaskSchema }>,
  reply: FastifyReply
) => {
  try {
    const db = server.mongo.db;
    const createdTask = await db
      .collection('tasksUser1')
      .insertOne(request.body);
    return { id: createdTask.insertedId };
  } catch (error) {
    server.log.error('error inserting data', error);
  }
};
