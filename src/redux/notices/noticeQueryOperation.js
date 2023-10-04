import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://your-pet-backend-nci6.onrender.com/',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    // headers.set('Content-Type', 'multipart/form-data');
    return headers;
  },
});

export const noticeApi = createApi({
  reducerPath: 'noticeApi',
  baseQuery,
  tagTypes: ['AllNotice', 'myNotice', 'favoriteNotice'],
  refetchOnFocus: true,
  refetchOnReconnect: true,
  keepUnusedDataFor: 0,
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
    deletePet: builder.mutation({
      query(id) {
        return {
          url: `/api/pets/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [
        { type: 'myNotice', id },
        { type: 'favoriteNotice', id },
        { type: 'AllNotice', id },
      ],
    }),
    addNewPetNotice: builder.mutation({
      query(noticeData) {
        const formData = new FormData();

        formData.append('name', noticeData.name);
        formData.append('location', noticeData.location);
        formData.append('file', noticeData.file);
        formData.append('type', noticeData.type);
        formData.append('date', noticeData.date);
        formData.append('sex', noticeData.sex);
        formData.append('title', noticeData.title);
        if (noticeData.comments) {
          formData.append('comments', noticeData.comments);
        }
        formData.append('category', noticeData.category);
        if (noticeData.price) {
          formData.append('price', noticeData.price);
        }

        return {
          url: `/api/notices`,
          method: 'POST',
          body: formData,
          formData: true,
        };
      },
      invalidatesTags: ['AllNotice', 'myNotice', 'favoriteNotice'],
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
  useDeletePetMutation,
  useAddNewPetNoticeMutation,
} = noticeApi;

// export const addNewPetNotice = createAsyncThunk(
//   'addPet/newPetNotice',
//   async (pet, { rejectWithValue }) => {
//     try {
//       const formData = new FormData();

//       formData.append('name', pet.name);
//       formData.append('location', pet.location);
//       formData.append('file', pet.file);
//       formData.append('type', pet.type);
//       formData.append('date', pet.date);
//       formData.append('sex', pet.sex);
//       formData.append('title', pet.title);
//       if (pet.comments) {
//         formData.append('comments', pet.comments);
//       }
//       formData.append('category', pet.category);
//       if (pet.price) {
//         formData.append('price', pet.price);
//       }

//       const response = await addPetInstance.post('api/notices', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
