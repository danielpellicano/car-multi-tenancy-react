import {} from '../actions/alert.action'
import { actionTypes } from '../actions/notify.action'

const initialState = {
    open: true,
    class: 'success',
    time: 3000,
    msg: 'Dados atualizados'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionTypes.CHANGE:
        return { ...state, ...payload }

    default:
        return state
    }
}
