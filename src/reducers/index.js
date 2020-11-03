const initialState = {

  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],


};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FEATURE":

      // checks if object is alread in array, if so, return normal state, and don't add to list. 

      for(let i = 0; i < state.car.features.length; i++){
        if(action.payload.name === state.car.features[i].name ){
          return state; 
        }
      }

      return {
        ...state,
        car: {
          ...state.car, 
          features: [...state.car.features, action.payload], 
          price: state.car.price + action.payload.price
        }
      };
    case "REMOVE_FEATURE": 

      const newList = state.car.features.filter(cur => cur.name !== action.payload.name); 
      
      return {
        ...state, 
        car: {
          ...state.car, 
          features: [...newList], 
          price: state.car.price - action.payload.price, 
        }
      }
    default:
      return state;
  }
};
