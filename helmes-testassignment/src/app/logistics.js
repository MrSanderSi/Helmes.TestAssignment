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
    switch (action.type) {
        case ActionTypes.SET_PARCELS:
            return { ...state, parcels: [...action.payload] };
        case ActionTypes.NEW_PARCELS:
            return { ...state, parcels: [...state.parcels, action.payload] };
        case ActionTypes.SET_LETTERS:
            return { ...state, letters: [...action.payload] };
        case ActionTypes.NEW_LETTERS:
            return { ...state, letters: [...state.letters, action.payload] };
        default:
            return state;
    }
}