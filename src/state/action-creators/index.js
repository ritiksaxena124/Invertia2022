const setClubName = (clubName)=>{
    return (dispatch) => {
        dispatch({
            type:"setName",
            payload: clubName
        })
    }
}

export {setClubName};