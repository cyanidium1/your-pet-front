import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://your-pet-backend-nci6.onrender.com/',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const noticeApi = createApi({
  reducerPath: 'noticeApi',
  baseQuery,
  tagTypes: ['AllNotice', 'myNotice', 'favoriteNotice'],
  refetchOnFocus: true,
  refetchOnReconnect: true,
  keepUnusedDataFor: 2,
  endpoints: builder => ({
    getAllNotice: builder.query({
      query: queryParams => ({
        url: '/api/notices',
        method: 'GET',
        params: queryParams,
      }),
      providesTags: ({ notices } = {}) => {
        return notices
          ? [
              ...notices.map(({ _id }) => ({ type: 'AllNotice', id: _id })),
              [
                { type: 'myNotice', id: 'List' },
                { type: 'favoriteNotice', id: 'List' },
                { type: 'AllNotice', id: 'List' },
              ],
            ]
          : [
              { type: 'myNotice', id: 'List' },
              { type: 'favoriteNotice', id: 'List' },
              { type: 'AllNotice', id: 'List' },
            ];
      },
    }),
    getNoticeById: builder.query({
      query: id => ({
        url: `/api/notices/${id}`,
        method: 'GET',
      }),
    }),
    getMyAds: builder.query({
      query: queryParams => ({
        url: '/api/notices/user-notices',
        method: 'GET',
        params: queryParams,
      }),
      providesTags: ({ notices } = {}) => {
        return notices
          ? [
              ...notices.map(({ _id }) => ({ type: 'myNotice', id: _id })),
              [
                { type: 'myNotice', id: 'List' },
                { type: 'favoriteNotice', id: 'List' },
                { type: 'AllNotice', id: 'List' },
              ],
            ]
          : [
              { type: 'myNotice', id: 'List' },
              { type: 'favoriteNotice', id: 'List' },
              { type: 'AllNotice', id: 'List' },
            ];
      },
    }),
    getMyFavorite: builder.query({
      query: queryParams => ({
        url: '/api/notices/favorites',
        method: 'GET',
        params: queryParams,
      }),
      providesTags: ({ notices } = {}) => {
        return notices
          ? [
              ...notices.map(({ _id }) => ({
                type: 'favoriteNotice',
                id: _id,
              })),
              [
                { type: 'myNotice', id: 'List' },
                { type: 'favoriteNotice', id: 'List' },
                { type: 'AllNotice', id: 'List' },
              ],
            ]
          : [
              { type: 'myNotice', id: 'List' },
              { type: 'favoriteNotice', id: 'List' },
              { type: 'AllNotice', id: 'List' },
            ];
      },
    }),
    addFavorite: builder.mutation({
      query(id) {
        return {
          url: `/api/notices/${id}/add-to-favorites`,
          method: 'PATCH',
        };
      },
      invalidatesTags: (result, error, id) => [
        { type: 'myNotice', id },
        { type: 'favoriteNotice', id },
        { type: 'AllNotice', id },
      ],
    }),
    removeFavorite: builder.mutation({
      query(id) {
        return {
          url: `/api/notices/${id}/remove-from-favorites`,
          method: 'PATCH',
        };
      },
      invalidatesTags: (result, error, id) => [
        { type: 'myNotice', id },
        { type: 'favoriteNotice', id },
        { type: 'AllNotice', id },
      ],
    }),
    deleteNotice: builder.mutation({
      query(id) {
        return {
          url: `/api/notices/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [
        { type: 'myNotice', id },
        { type: 'favoriteNotice', id },
        { type: 'AllNotice', id },
      ],
    }),
  }),
});

export const {
  useGetAllNoticeQuery,
  useGetMyAdsQuery,
  useGetMyFavoriteQuery,
  useDeleteNoticeMutation,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
  useGetNoticeByIdQuery,
} = noticeApi;
