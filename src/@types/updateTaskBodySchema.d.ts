/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface UpdateTaskBodySchema {
  /**
   * Id of the task
   */
  _id?: string;
  /**
   * Title of the task
   */
  title: string;
  /**
   * Details of the task
   */
  details: string;
  /**
   * Deadline of the task (Date in string)
   */
  dueDate: string;
  /**
   * Tag(s) of the task
   */
  tags: string[];
  /**
   * Could be To do, Doing or Done
   */
  status: "To do" | "Doing" | "Done";
  /**
   * Estimated Time to finish the task
   */
  estimatedTime: number;
  /**
   * How much time it took to finish the task (seconds in string)
   */
  timeTaken: number | null;
  /**
   * The date when the task was finished (Date in string)
   */
  finishedDate: string | null;
  [k: string]: unknown;
}
