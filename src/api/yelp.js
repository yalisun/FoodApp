import axios from 'axios';

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: 
      'Bearer NCOYQ8YgUypPX-F7trtbipQ8e6rRe8XRyf5U1N5dsE_SxcOHtkrlP-WB9InAzV8H6csXchSplEGPoZRipAqChXFWcBKRy05bsGhqo6jcLsKbBEeMOpbGt2M0HdJTYHYx'
  }
});
