import server from '../index';
import { FastifyReply, FastifyRequest } from 'fastify';
import { ObjectId } from 'bson';
import { CreateTaskBodySchema } from '../@types/createTaskBodySchema';
import { UpdateTaskBodySchema } from '../@types/updateTaskBodySchema';
import { UpdateTaskParamsSchema } from '../@types/updateTaskParamsSchema';
import { DeleteTaskParamsSchema } from '../@types/deleteTaskParamsSchema';
import { Db } from 'mongodb';

export const createTask = async (
  request: FastifyRequest<{ Body: CreateTaskBodySchema }>,
  reply: FastifyReply
) => {
  try {
    const db = server.mongo.db as Db;
    const { title, details, dueDate, tags, estimatedTime } = request.body;
    const data = {
      title,
      details,
      dueDate,
      tags,
      status: 'To do',
      estimatedTime,
      timeTaken: null,
      finishedDate: null,
    };
    const createdTask = await db.collection('tasksUser1').insertOne(data);
    return { id: createdTask.insertedId };
  } catch (error) {
    server.log.error('error inserting data');
    server.log.error(error);
  }
};

export const readTasks = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const db = server.mongo.db as Db;
    const readTasks = await db.collection('tasksUser1').find().toArray();
    return readTasks;
  } catch (error) {
    server.log.error('error reading data');
    server.log.error(error);
  }
};

export const updateTask = async (
  request: FastifyRequest<{
    Body: UpdateTaskBodySchema;
    Params: UpdateTaskParamsSchema;
  }>,
  reply: FastifyReply
) => {
  try {
    const { taskId } = request.params;
    const {
      title,
      details,
      dueDate,
      tags,
      status,
      timeTaken,
      finishedDate,
    } = request.body;
    const data = {
      title,
      details,
      dueDate,
      tags,
      status,
      timeTaken,
      finishedDate,
    };
    const db = server.mongo.db as Db;
    const updatedTask = await db
      .collection('tasksUser1')
      .updateOne({ _id: new ObjectId(taskId) }, { $set: data });
    return { updatedElements: updatedTask.modifiedCount };
  } catch (error) {
    server.log.error('error updating data');
    server.log.error(error);
  }
};

export const deleteTask = async (
  request: FastifyRequest<{
    Params: DeleteTaskParamsSchema;
  }>,
  reply: FastifyReply
) => {
  try {
    const { taskId } = request.params;
    const db = server.mongo.db as Db;
    const deletedTask = await db
      .collection('tasksUser1')
      .deleteOne({ _id: new ObjectId(taskId) });
    return { deletedElements: deletedTask.deletedCount };
  } catch (error) {
    server.log.error('error deleting data');
    server.log.error(error);
  }
};
