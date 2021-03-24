import { ActionCreators } from '../app/logistics';
import * as axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:5001/logistics'
})
export const GetLetters = async (dispatch) => {
    //fake api call
    try{
        const response = [
            {
                Id: 1,
                BagNumber: 3,
                AmountOfLetters: 20,
                BagWeight: 0.2,
                ShippingPrice: 40
    
            },
            {
                Id: 2,
                BagNumber: 4,
                AmountOfLetters: 30,
                BagWeight: 0.3,
                ShippingPrice: 55.20
            },
        ]
        dispatch(ActionCreators.setLetters(response));
    } catch{
        console.log("fakeAPI isn't working properly");
    }
    
    /*
  try {
    const { data  } = await axiosInstance.get();
    dispatch(ActionCreators.setLetters(data));
  } catch {
    console.log("OOPS! Someting went wrong with getting the orders!");
  }*/
}
export const NewLetter = async (dispatch, letter) => {
  try {
    const { data } = await axiosInstance.post('', {letter})
    dispatch(ActionCreators.NewLetter(data));
  } catch {
    console.log("Something went wrong with saving the order!");
  }
}
export const GetParcels = async (dispatch) => {
    try {
      const { data  } = await axiosInstance.get();
      dispatch(ActionCreators.setLetters(data));
    } catch {
      console.log("OOPS! Someting went wrong with getting the orders!");
    }
  }
  export const NewParcels = async (dispatch, parcel) => {
    try {
      const { data } = await axiosInstance.post('', {parcel})
      dispatch(ActionCreators.NewParcels(data));
    } catch {
      console.log("Something went wrong with saving the order!");
    }
  }