import { createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

export const getCountriesApi = createAsyncThunk("getting Api from countries", async()=>{
    const gottenCountries = await axios.get('https://restcountries.com/v3.1/all').catch(error =>{
        return error
    })
    const countryData = gottenCountries.data
    console.log(countryData)
    return countryData

})


const countriesSlice = createSlice({
    name:"countries",
    initialState,
    extraReducers:{
        [getCountriesApi.fulfilled]:(state, action)=>{
            return action.payload

        }

    }
})

export default countriesSlice.reducer