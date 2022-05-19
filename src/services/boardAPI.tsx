import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL_API } from '../constants/appConstants';
import { RootStateType } from '../store/store';
import { IAllBoards, ICreateBoardDto, IUpdateBoardDto } from '../types/interfaces';

export const boardAPI = createApi({
  reducerPath: 'boardAPI',

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_API,
    prepareHeaders: (headers, api) => {
      const state = api.getState() as RootStateType;
      headers.set('Accept', 'application/json');
      headers.set('Authorization', `Bearer ${state.basis.token}`);
      /* headers.set('Content-Type', 'application/json'); */
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getAllBoards: builder.query<Array<IAllBoards>, void>({
      query: () => '/boards',
    }),

    createBoard: builder.mutation<IAllBoards, ICreateBoardDto>({
      query: (board) => ({
        url: '/boards',
        method: 'POST',
        body: board,
      }),
    }),

    getBoard: builder.query<object, string>({
      query: (boardId) => `/boards/${boardId}`,
    }),

    deleteBoard: builder.mutation({
      query: (boardId) => ({
        url: `/boards/${boardId}`,
        method: 'DELETE',
      }),
    }),

    /* updateBoard: builder.query<>({

    }) */
  }),
});
