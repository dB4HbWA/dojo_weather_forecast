import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//localStorage.setItem("apiKey","9e48d00c9be7e826c8586bf11f8dd849")
localStorage.setItem("apiKey","e732348669ce5455d2c70577462ce33b")

export default createStore(
   reducer,
   composeEnhancers(
     applyMiddleware(thunk.withExtraArgument('http://api.openweathermap.org/data/2.5/weather?')),
   )
)




