import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instance from "../../utils/instance"
import { useParams } from "react-router"


const initialState = {
    loading : false ,
    tourInfo : {} ,
    error  : null,
    success : false 
}

const token = localStorage.getItem('accessToken')

export const showAllTour = createAsyncThunk('tours/allTours' ,async (_ , thunkApi) => {
    try{
 const response = await instance.get('/tour') ;
 return response
    }catch(err){
        return thunkApi.rejectWithValue(err.response.data.errors)
    }
})

export const singleTour = createAsyncThunk('tours/singleTour' , async(id , thunkApi) => {
    try{
    const response =await instance.get(`/tour/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response)
      return response ;
    }catch(err){
        return thunkApi.rejectWithValue(err.response)
    }
})

const tourSlice = createSlice({
    name : 'tour',
    initialState,
    extraReducers : builder => {
        builder
        .addCase(showAllTour.pending , (state) => {
            state.loading = true ;
        })
        .addCase(showAllTour.fulfilled , (state , action) => {
            state.loading = false ;
            state.tourInfo = action.payload
        })
        .addCase(showAllTour.rejected , (state) => {
            state.loading = false ;
            state.tourInfo = null
        })
        .addCase(singleTour.pending , (state) => {
            state.loading = true ;
        })
        .addCase(singleTour.fulfilled , (state , action) => {
            state.loading = false ;
            state.tourInfo = action.payload
        })
        .addCase(singleTour.rejected , (state) => {
            state.loading = false ;
            state.tourInfo = null
        })
    }
})

export default tourSlice.reducer