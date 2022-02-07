import { SELECTED_PRODUCTS, SET_PRODUCTS } from "../constants/productConstants";

const initialState = {
    products: [],
    selectedItem:{}
}

const productReducer = (state = initialState,{type,payload}) =>{
    switch(type){
        case SET_PRODUCTS:
            const newState = {...state,products:payload};
            return newState;
            break;

        case SELECTED_PRODUCTS:
            const newSelectItem = {...state,selectedItem:payload};
            return newSelectItem;
            break;    
        
       default: return state;
    }
}

export default productReducer;