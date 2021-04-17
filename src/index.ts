import fastify from 'fastify';
import fastifyEnv from 'fastify-env';
import dbConnector from './db/connection';
import tasksRoutes from './routes/tasks';
import DotenvSchema from './schemas/dotenvSchema.json';
import dotenv from 'dotenv';

dotenv.config();
const server = fastify({ logger: { prettyPrint: true } });

//enabling .env variables
// server.register(fastifyEnv, {
//   schema: DotenvSchema,
//   dotenv: {
//     path: `${__dirname}/.env`,
//     debug: true,
//   },
// });

//connecting to db
server.register(dbConnector);

//registering tasks Routes
tasksRoutes.forEach((route) => {
  server.route(route);
});

server.listen(process.env.PORT as string, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

export default server;

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
