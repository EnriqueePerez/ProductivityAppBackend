# Backend/API endpoints

Backend made with Fastify and Typescript. It was made with the arquitecture to able more routes and more endpoints if necessary

### Create a task

**method**: POST

**route**: /tasks

**body**:

```json
//createTaskSchema
{
	"title": string,
	"details": string,
	"dueDate": string,
	"tags": string[][],
	"estimatedTime": number,
}
```

### Modify a task

**method**: PUT

**route**: /tasks/:taskId

**params**: `taskid: string`

**body**:

```json
//updateTaskSchema
{
	"_id": string,
	"title": string.
	"details": string,
	"dueDate": string,
	"tags": string[],
	"status": "To do" | "Doing" | "Done",
	"estimatedTime": number,
	"timeTaken": null | number,
	"finishedDate": null | string
}
```

### Delete a task

**method**: DELETE

**route**: /tasks/:taskId

**params**: `id: string`

### Get all the tasks

**method**: GET

**route**: /tasks

# Database structure

```json
//taskSchema
{
	"_id": string,
	"title": string,
	"details": string,
	"dueDate": string,
	"tags": string[][],
	"status": "To do" | "Doing" | "Done",
	"estimatedTime": number,
	"timeTaken": null | number,
	"finishedDate": null | string
}
```

### Example of data

```json
{
	"_id":"607a798a0d41e2fc5e39f79f"},
	"title":"Test Backend",
	"details":"Testing the backend",
	"dueDate":"2021-04-17T05:00:00.000Z",
	"tags":[
	  ["Data Science", "red"],
	  ["Frontend", "yellow"],
  ],
	"status":"To do",
	"estimatedTime": 1800,
	"timeTaken":null,
	"finishedDate":null
}
```

### Posible colors of the tag

1. red
2. yellow
3. green
4. blue
5. indigo
6. purple
7. pink
