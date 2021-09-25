import React from 'react';
import { useState, useEffect, useReducer } from 'react';

import axios from 'axios';
import './app.scss';
import History from './components/History';
// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const initialState = {
  history: []
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_New_request':
      return {
        ...state,
        history: [...state.history, action.payload]


      };
    default:
      return state;
  }

}

function App (){
  const [state, dispatch] = useReducer(reducer, initialState)
  const [data, setdata] = useState(null);
  const [requestParams, setrequestParam] = useState({});

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: null,
  //     requestParams: {},
  //     result:[]
  //   };
  // }

  function addHistory(info) {


    return {
      type: 'ADD_New_request',
      payload: { info }
    }

  }

  const callApi = (formData) => {
    setrequestParam(formData);
  }

  useEffect(() => {
    async function getApiData () {
      if(requestParams.url){

        const url = requestParams.url;
        const method = requestParams.method;
        const reqBody = requestParams.reqBody;
       const data = await axios({
          method: method,
          url: url,
          reqBody: reqBody
        });
        console.log(data);
  setdata(data)
  console.log(requestParams);
  dispatch(addHistory(requestParams));
      }
      }
    getApiData ();
  }, [requestParams])


  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <History addNewHistory={state.history} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
  
}

export default App;
