import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../utils/instance";

const initialState = {
    loading : false ,
    userInfo : {} ,
    userToken : null,
    error  : null,
    success : false 
}

export const register = createAsyncThunk('auth/register' , async(userData , thunkApi) => {
    console.log("userData" , userData)
    try{
     const response = await instance.post('/user/signup' , 
          userData
      ) ;
     return response.data
    }catch(err){
      return thunkApi.rejectWithValue(err.response.data.errors)
    }
})

export const login = createAsyncThunk('auth/login' , async(userData , thunkApi) => {
    console.log("userData" , userData)
    try{
     const response = await instance.post('/user/login' , 
          userData
      ) ;
     return response.data
    }catch(err){
      return thunkApi.rejectWithValue(err.response.data.errors)
    }
})

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser' , async(_ , thunkApi) => {
   
    try{
        const token = localStorage.getItem("accessToken") ?? ''

     const response = await instance.get('/user/me' , 
          {
            headers : {
                Authorization : `Bearer ${token}`
            }
          }
      ) ;

     return response.data.data
     
    }catch(err){
      return thunkApi.rejectWithValue(err.response.data.errors)
    }
})


export const logout = createAsyncThunk('auth/logout' , async() => {
    localStorage.removeItem("accessToken")
})

const authSlice = createSlice({
    name : 'auth',
    initialState ,
    extraReducers : builder => {
     builder.addCase(register.pending , (state) => {
        state.isLoading = true ;
     } )
     .addCase(register.fulfilled , (state , action) => {
        state.isLoading = false ;
        state = action.payload 
     })
     .addCase(register.rejected , (state ) => {
        state.isLoading = false ;
        
     })
     .addCase(login.pending , (state) => {
        state.isLoading = true ;
     } )
     .addCase(login.fulfilled , (state , action) => {
        state.isLoading = false ;
        state = action.payload 
     })
     .addCase(login.rejected , (state ) => {
        state.isLoading = false ;
        
     })
     .addCase(getCurrentUser.pending , (state) => {
        state.isLoading = true ;
     } )
     .addCase(getCurrentUser.fulfilled , (state , action) => {
        state.isLoading = false ;
        state.userInfo = action.payload 
     })
     .addCase(getCurrentUser.rejected , (state ) => {
        state.isLoading = false ;
        state.userInfo = null
     })
     .addCase(logout.fulfilled , (state ) => {
        state.isLoading = false ;
        state.userInfo = null
     })
    }
})

export default authSlice.reducer