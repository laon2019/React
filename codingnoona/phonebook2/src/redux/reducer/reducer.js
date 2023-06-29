const initialState = {
    contact: [],
    keyword: ""
  };
  const contactReducer = (state = initialState, action) => {
    let {type, payload} = action;
  switch(type){
    case "ADD_CONTACT":
      state.contact.push({
        name : payload.name,
        phoneNumber : payload.phoneNumber
      });
      break;
    case "KEYWORD":
      state.keyword = payload.keyword;
      break;
  }
   return {...state}
  };
  
  export default contactReducer;