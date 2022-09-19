const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const fetch = require('node-fetch');
//initial state
const initialState = {
    loading: false,
    user: [],
    error: ''
}

// create async thunk
const fetchUsers = createAsyncThunk('user/fetch', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true,
                state.error = ''
        });

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false,
                state.user = action.payload,
                state.error = ''
        });

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false,
                state.user = [],
                state.error = action.error.message
        })

    }
})


module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
