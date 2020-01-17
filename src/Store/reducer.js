import {ADD_TO_CARD, SUCCESS} from "./actions";

const initialState = {
    foods: null,
};

const reducer =(state = initialState,action) =>{
    switch (action.type) {
        case SUCCESS:
             return {...state, foods: action.foods};
        case ADD_TO_CARD:
            return {...state,orders: action.orders};

        default:
            return state
}
};
export default reducer