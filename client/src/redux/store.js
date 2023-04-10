import {createStore,applyMiddleware,compose} from "redux";
import reducer from "./reducer";
import thunkMiddlewere from "redux-thunk";
// import {composeWithdevTools} from "redux-devtools-extension"

const composerEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // esta linea es 
// para conectar  con la etension del navegador >>> REDUX DEVTOOLS
const store = createStore(reducer,
    composerEnhacer(applyMiddleware(thunkMiddlewere)));// esta es para poder hacer peticiones 
    // a un server 

    //? middlerware sirve para hacer llamados alas api

    export default store