import * as actionTypes from "../constants/actionTypes";
import {
    updateObject
  } from './utility';

const initialState = {
    paperClips: 0,
    funds: 0,
    paperclipPrice: 0.50,
    unsoldInventory: []
}

const addPaperclip = (state) => {
    let updatedInventory = state.unsoldInventory;
    updatedInventory.push('')

    return updateObject(state, {
       paperClips: state.paperClips + 1,
       unsoldInventory: updatedInventory
    });
}

const updateFunds = (state, action) => {
    return updateObject(state, {
       funds: action.value
    });
}

const updateUnsoldInventory = (state, action) => {
   let updatedInventory = state.unsoldInventory;
    updatedInventory.splice(-1,1)
    return updateObject(state, {
        unsoldInventory: updatedInventory
    });
}

const businessReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.MAKE_PAPERCLIP:
            return addPaperclip(state, action);
        case actionTypes.START_SELLING:
            return state;
        case actionTypes.UPDATE_FUNDS:
            return updateFunds(state, action);
        case actionTypes.UPDATE_UNSOLD_INVENTORY:
            return updateUnsoldInventory(state, action);
        default: 
            return state;
    }
}

export default businessReducer;
