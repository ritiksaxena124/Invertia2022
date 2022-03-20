const reducer = (state="", action) => {
    if(action.type === 'setName'){
        return action.payload;
    }else{
        return state;
    }
}

export default reducer;