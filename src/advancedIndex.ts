import fastify, { RequestGenericInterface } from 'fastify';

const server = fastify({ logger: { prettyPrint: true } });

//interface for types in the auth route
// note, this not guarantee the schema, if you want to guarantee the schema, check
// https://www.fastify.io/docs/latest/TypeScript/#json-schema
interface authRequest extends RequestGenericInterface {
  Body: {
    username: string;
    password: string;
  };
  Headers: {
    'h-Custom': string;
  };
}

server.get<authRequest>(
  '/auth',
  {
    //preValidation hook
    preValidation: (request, reply, done) => {
      const { username, password } = request.body;
      done(
        username !== 'admin' ? new Error('Must be admin to enter') : undefined
      );
    },
  },
  async (request, reply) => {
    const { username, password } = request.body;
    const customHeader = request.headers['h-Custom'];

    //auth user

    return 'logged in';
  }
);

server.get('/ping', async (request, reply) => {
  return 'pong 🏓';
});

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
