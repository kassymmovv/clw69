import {REQUEST,ERROR,SUCCESS} from "./actions";

const initialSate = {
    loading:false,
    error:null,
};
const orderReducer = (state = initialSate,action) =>{
    switch (action.type) {
        case REQUEST:
            return{...state,loading: true};
        case SUCCESS:
            return {...state,loading: false};
        case ERROR:
            return {...state,loading: false,error: action.error}
        default:
            return state
    }
};
export default orderReducer