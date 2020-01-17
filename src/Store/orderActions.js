import {REQUEST,SUCCESS,ERROR} from "./actions";
import axiosOrders from "../axios";
 export const orderRequest = () => ({type:REQUEST});
 export const orderSuccess = () => ({type:SUCCESS});
 export const orderError = error => ({type:ERROR,error});

 export const createOrder = order => {
     return async (dispatch) => {
         try {
             dispatch(orderRequest());
             await axiosOrders.post('/orders.json' ,order);
             dispatch(orderSuccess());
         }catch (e) {
             dispatch(orderError(e))
         }
     }
 };