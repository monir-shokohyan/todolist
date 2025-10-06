import { createAsyncThunk } from '@reduxjs/toolkit'

import { api } from '@shared/api/axios-instance'

import { Dto } from './dto'

export const login = createAsyncThunk('auth/login', async (body: Dto) => {
  const response = await api.post<Response>('login', body)
  // const { tokenAccess, refreshToken } = response.data
  // if (tokenAccess) {
  //   localStorage.setItem(import.meta.env.VITE_APP_LS_TOKEN_KEY, tokenAccess)
  //   localStorage.setItem(
  //     import.meta.env.VITE_APP_LS_REFRESH_KEY,
  //     JSON.stringify(refreshToken),
  //   )
  // }
  return response.data
})
