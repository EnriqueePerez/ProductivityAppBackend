import {
  FastifyInstance,
  FastifyPluginOptions,
  RouteHandlerMethod,
  RouteOptions,
} from 'fastify';
import * as taskController from '../controllers/tasks';
import createTaskSchema from '../schemas/createTaskSchema.json';
import { CreateTaskSchema } from '../types/createTaskSchema';

// export async function tasksRoutes(
//   fastify: FastifyInstance,
//   options: FastifyPluginOptions
// ) {
//   fastify.post<{ Body: CreateTaskSchema }>(
//     '/tasks',
//     { schema: { body: createTaskSchema } },
//     async (request, reply) => {
//       try {
//         const db = fastify.mongo.db;
//         const createdTask = await db
//           .collection('tasksUser1')
//           .insertOne(request.body);
//         return { id: createdTask.insertedId };
//         // return 'done 🏓 \n';
//       } catch (error) {
//         fastify.log.error('error inserting data', error);
//       }
//     }
//   );
// }

const createTaskRoute: RouteOptions = {
  method: 'POST',
  url: '/tasks',
  handler: taskController.createTask as RouteHandlerMethod,
  schema: { body: createTaskSchema },
};

const tasksRoutes = [createTaskRoute];

export default tasksRoutes;
