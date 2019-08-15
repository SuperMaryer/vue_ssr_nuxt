import axios from 'axios';
 axios.defaults.baseURL = 'http://localhost:3200';
  
 let options = {
     timeout: 5000
 }

 export default axios.create(options)
