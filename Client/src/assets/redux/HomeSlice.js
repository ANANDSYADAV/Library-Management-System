import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCSBooks = createAsyncThunk(
    "HomePage/fetchCSBooks",
    async (category) => {
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(category)}&limit=50`);
        const data = await response.json();
        console.log(data.docs);
        return data.docs
    }
)

export const fetchFictionBooks = createAsyncThunk(
    "HomePage/fetchFictionBooks",
    async (category) => {
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(category)}&limit=50`);
        const data = await response.json();
        console.log(data.docs);
        return data.docs
    }
)

export const fetchHealthBooks = createAsyncThunk(
    "HomePage/fetchHealthBooks",
    async (category) => {
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(category)}&limit=50`);
        const data = await response.json();
        console.log(data.docs);
        return data.docs
    }
)

export const fetchSportsBooks = createAsyncThunk(
    "HomePage/fetchSportsBooks",
    async (category) => {
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(category)}&limit=50`);
        const data = await response.json();
        console.log(data.docs);
        return data.docs
    }
)

const initialState = {
    loading: true,
    ComputerScience: [],
    Fiction: [],
    Health: [],
    Sports: [],
    mobileMenu: false,
}

const HomeSlice = createSlice({
    name: 'HomePage',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCSBooks.fulfilled, (state, action) => {
            state.ComputerScience = action.payload;
        }),
        builder.addCase(fetchFictionBooks.fulfilled, (state, action) => {
            state.Fiction = action.payload;
        }),
        builder.addCase(fetchHealthBooks.fulfilled, (state, action) => {
            state.Health = action.payload;
        }),
        builder.addCase(fetchSportsBooks.fulfilled, (state, action) => {
            state.Sports = action.payload;
        })
    }
});

export default HomeSlice.reducer;