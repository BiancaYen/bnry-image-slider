import axios from 'axios';

export const url = 'http://localhost:3001/api/images';

const getImages = () => {
    return axios({
        method: 'GET',
        url
    }).then(({ data }) => {
        return data;
    });
};

export default getImages;
