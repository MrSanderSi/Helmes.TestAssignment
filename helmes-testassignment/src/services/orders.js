import { ActionCreators } from '../app/logistics';
import { configureStore } from '@reduxjs/toolkit';
import * as axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:5001/logistics'
})
export const GetLetters = async (dispatch) => {
  try {
    const { data  } = await axiosInstance.get();
    dispatch(ActionCreators.setLetters(data));
  } catch {
    console.log("OOPS! Someting went wrong with getting the orders!");
  }
}
export const NewLetter = async (dispatch, letter) => {
  try {
    const { data } = await axiosInstance.post('', {value: order})
    dispatch(ActionCreators.NewLetter(data));
  } catch {
    console.log("Something went wrong with saving the order!");
  }
}