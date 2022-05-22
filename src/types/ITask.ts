export interface ITask {
  id: string;
  title: string;
  done: false;
  order: boolean;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
  files: [];
}

// export interface ICreateTaskDto {}

// export interface IUpdateTaskDto {}
