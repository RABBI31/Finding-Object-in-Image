import axios from 'axios' ;

export default axios.create({
    baseURL: 'https://api.unsplash.com' ,
    headers : {
        Authorization: 'Client-ID p5SHECY1WD4dGz5R_2UtdA4SBYdUJUjuLtwsxUmEKFk'
    }
})