import { createAsyncThunk, createSlice, isPending } from '@reduxjs/toolkit'
import authService from './authService'

let userExist = JSON.parse(localStorage.getItem('user'))



const initialState = {
    user: userExist ? userExist : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: " "

}




const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: {
            reset: (state, action) => {
                state.user = null
                state.message = " "
                state.isError = false
                state.isSuccess = false
                state.isLoading = false
            }
        }


    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state, action) => {
                state.isLoading = true
            })

            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })

            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.user = null
                state.message = action.payload
            })

            //logoin part in the function 
            
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.user = null;
        state.message = action.payload;
      })

        //logout case only ONE

        .addCase(logout.fulfilled , (state) => {
            state.isLoading = false
            state.user = null
          });



    }
})



// register 

export const register = createAsyncThunk("auth/register", async (userData, thunkAPI) => {

    try {
        return await authService.register(userData)

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }


})

// Login data


export const login = createAsyncThunk("auth/login", async (userData  ,thunkAPI) => {

    try {
        return await authService.login(userData)

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }

})

//logout 

export const logout = createAsyncThunk("auth/logout", async () => {
    return  authService.logout
})







export const { reset } = authSlice.actions
export default authSlice.reducer 