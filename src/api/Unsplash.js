import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers : {
        Authorization: 'Client-ID _J-O6RNpOvUyK18xyIT_iI6Th-vFZ28-appBCknQfTc'
      }
  });