'use client';

import { loginApi } from '@/api/auth/action';
import { removeCookie } from '@/api/session';
import { JWT } from '@/config';
import { store } from '@/store';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { login, logout } from './authReducer';

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (
    body: {
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    try {
      return loginApi({
        email: body.email,
        password: body.password
      })
        .then(res => {
          // store.dispatch(login(res.content.id_token));
          console.log('signin', res);
        })
        .catch((error: unknown) => {
          return thunkAPI.rejectWithValue(error);
        });
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'logout/logoutUser',
  async (_, thunkAPI) => {
    try {
      removeCookie(JWT);
      thunkAPI.dispatch(logout());
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);
