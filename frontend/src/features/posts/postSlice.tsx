import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import produce from  "immer";
import  { RootState } from "../../app/store"

const initialState: any ={
    posts: [
        {
        id: 0,
        title: "Hello Word",
        body: "I'M HERE",
        created_at: "2023-08-06T23:40:17.757Z",
        updated_at: "2023-08-06T23:40:17.757Z",
        url: "http://localhost:3000/posts/1.json"
        }
        ]
}