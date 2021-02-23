const SET_MENU_STATE = 'SET_MENU_STATE'

let initialState = {
    items: [
        {id: 1, name: 'Home', url: '/'},
        {id: 2, name: 'Profile', url: '/profile'},
        {id: 3, name: 'Game history', url: '/history'},
        {id: 4, name: 'Sign Out', url: '/signout'},
        ],
    menuOpened: false
}

const menuReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MENU_STATE: {
            return {
                ...state, menuOpened: action.menuState
            }
        }
        default:
            return state
    }

}

export const setMenuState = (menuState) => ({type: SET_MENU_STATE, menuState})

export default menuReducer