const inistialState = {
    parcels: [],
    letters: [],

}

export const ActionTypes = {
    SET_PARCELS: 'SET_PARCELS', 
    NEW_PARCELS: 'NEW_PARCELS',
    SET_LETTERS: 'SET_LETTERS',
    NEW_LETTERS: 'NEW_LETTERS'

}

export const ActionCreators = {
    setParcels: payload => ({ type: ActionTypes.SET_PARCELS, payload }),
    newParcels: payload => ({ type: ActionTypes.NEW_PARCELS, payload }),
    setLetters: payload => ({ type: ActionTypes.SET_LETTERS, payload }),
    newLetters: payload => ({ type: ActionTypes.NEW_LETTERS, payload }),
}

export default function Logistics(state = inistialState, action) {
    switch(action.type) {
        case ActionTypes.SET_PARCELS:
            return {...state, parcels: [...action.payload]};
        case ActionTypes.NEW_PARCELS:
            return {...state, parcels: [...state.orders, action.payload]};
        case ActionTypes.NEW_LETTERS:
            return {...state, parcels: [...state.payload]};
        case ActionTypes.NEW_LETTERS:
            return {...state, parcels: [...state.orders, action.payload]};
        default:
            return state;
    }   
}