import axiosOrders from "../axios";
export const ADD_TO_CARD = 'ADD_TO_CARD';
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const request = () => {
return{type:REQUEST};
};
export const success = foods => {
    return{type:SUCCESS,foods}
};
export const error = error => {
return{type:ERROR,error}
};


export const dishes = () => {
return dispatch =>{
    dispatch(request());
    axiosOrders.get('/foods.json').then(response => {
        dispatch(success(response.data));
        console.log(response.data);
    },error => {
        dispatch.error(error)
        })
    }
};

