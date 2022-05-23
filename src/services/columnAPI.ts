import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASE_URL_API } from '../constants/appConstants';
import { RootStateType } from '../store/store';
import { IColumn, ICreateColumnDto } from '../types/IColumn';

interface ICreateColumnQueryArgument extends ICreateColumnDto {
  boardId: string;
}

export const columnAPI = createApi({
  reducerPath: 'columnAPI',

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_API,
    prepareHeaders: (headers, api) => {
      const state = api.getState() as RootStateType;
      headers.set('Accept', 'application/json');
      headers.set('Authorization', `Bearer ${state.basis.token}`);
      return headers;
    },
  }),

  tagTypes: ['Column'],

  endpoints: (builder) => ({
    getAllColumns: builder.query<Array<IColumn>, string>({
      query: (boardId) => `/boards/${boardId}/columns`,
      providesTags: ['Column'],
    }),

    createColumn: builder.mutation<IColumn, ICreateColumnQueryArgument>({
      query: ({ boardId, title }) => ({
        url: `/boards/${boardId}/columns`,
        method: 'POST',
        body: { title },
      }),
      invalidatesTags: ['Column'],
    }),
  }),
});
