import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization: 
      'Bearer vinpiGZdAH7PIWg6h0xLUCUrS2s2wm0OkChPIQq7t_w_OrEFqaxil8FkRYRA29_qeQK-ba1k_DanCnj1Xumjc1mXOQNgh0Y2GGqFqrQFUqFcuF3qT0feEsQ0OM9sYHYx'
  }
});
