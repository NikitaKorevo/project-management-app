import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASE_URL_API } from '../constants/appConstants';
import { RootStateType } from '../store/store';
import { ICreateTaskDto, ITask } from '../types/ITask';

interface IGetAllTasksQueryArgument {
  boardId: string;
  columnId: string;
}

interface ICreateTaskQueryArgument extends ICreateTaskDto {
  boardId: string;
  columnId: string;
}

interface IDeleteTaskQueryArgument {
  boardId: string;
  columnId: string;
  taskId: string;
}

export const taskAPI = createApi({
  reducerPath: 'taskAPI',

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_API,
    prepareHeaders: (headers, api) => {
      const state = api.getState() as RootStateType;
      headers.set('Accept', 'application/json');
      headers.set('Authorization', `Bearer ${state.basis.token}`);
      return headers;
    },
  }),

  tagTypes: ['Task'],

  endpoints: (builder) => ({
    getAllTasks: builder.query<Array<ITask>, IGetAllTasksQueryArgument>({
      query: ({ boardId, columnId }) => `/boards/${boardId}/columns/${columnId}/tasks`,
      providesTags: ['Task'],
    }),

    createTask: builder.mutation<ITask, ICreateTaskQueryArgument>({
      query: ({ boardId, columnId, title, description, userId }) => ({
        url: `/boards/${boardId}/columns/${columnId}/tasks`,
        method: 'POST',
        body: { title, description, userId },
      }),
      invalidatesTags: ['Task'],
    }),

    deleteTask: builder.mutation<void, IDeleteTaskQueryArgument>({
      query: ({ boardId, columnId, taskId }) => ({
        url: `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Task'],
    }),
  }),
});
