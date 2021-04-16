import fastify from 'fastify';
import dbConnector from './db/connection';
import tasksRoutes from './routes/tasks';
import createTaskSchema from './schemas/createTaskSchema.json';
import { CreateTaskSchema } from './types/createTaskSchema';

const server = fastify({ logger: { prettyPrint: true } });

//connecting to db
server.register(dbConnector);

//registering tasks Routes
tasksRoutes.forEach((route) => {
  server.route(route);
});

// const opts: RouteShorthandOptions = {
//   schema: { body: createTaskSchema },
//   preValidation: async (request: FastifyRequest, reply: FastifyReply) => {
//     const { title, details, dueDate, tags } = request.body;
//   },
// };

// const preValidationCreateTask = (request: {body: CreateTaskSchema}, reply: FastifyReply) => {
//   const { title} = request.body
// }

// server.post<{ Body: CreateTaskSchema }>(
//   '/tasks',
//   { schema: { body: createTaskSchema } },
//   async (request, reply) => {
//     try {
//       const db = server.mongo.db;
//       const createdTask = await db
//         .collection('tasksUser1')
//         .insertOne(request.body);
//       return { id: createdTask.insertedId };
//       // return 'done 🏓 \n';
//     } catch (error) {
//       server.log.error('error inserting data', error);
//     }
//   }
// );

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

export default server;
