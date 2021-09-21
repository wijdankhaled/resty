import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App (){

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

  const callApi = (formData) => {
    // mock output
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
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
  
}

export default App;
