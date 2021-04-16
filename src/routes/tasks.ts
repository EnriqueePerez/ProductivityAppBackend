import { RouteHandlerMethod, RouteOptions } from 'fastify';
import * as taskController from '../controllers/tasks';
import createTaskBodySchema from '../schemas/createTaskBodySchema.json';
import updateTaskBodySchema from '../schemas/updateTaskBodySchema.json';
import updateTaskParamsSchema from '../schemas/updateTaskParamsSchema.json';
import deleteTaskParamsSchema from '../schemas/deleteTaskParamsSchema.json';

const createTaskRoute: RouteOptions = {
  method: 'POST',
  url: '/tasks',
  handler: taskController.createTask as RouteHandlerMethod,
  schema: { body: createTaskBodySchema },
};

const readTasksRoute: RouteOptions = {
  method: 'GET',
  url: '/tasks',
  handler: taskController.readTasks as RouteHandlerMethod,
};

const updateTaskRoute: RouteOptions = {
  method: 'PUT',
  url: '/tasks/:taskId',
  handler: taskController.updateTask as RouteHandlerMethod,
  schema: { body: updateTaskBodySchema, params: updateTaskParamsSchema },
};

const deleteTaskRoute: RouteOptions = {
  method: 'DELETE',
  url: '/tasks/:taskId',
  handler: taskController.deleteTask as RouteHandlerMethod,
  schema: { params: deleteTaskParamsSchema },
};

const tasksRoutes = [
  createTaskRoute,
  readTasksRoute,
  updateTaskRoute,
  deleteTaskRoute,
];

export default tasksRoutes;

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
