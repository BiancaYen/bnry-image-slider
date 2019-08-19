import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Request
import getImages, { url } from './getImages';

describe('getImagesRequest', () => {
    it('returns data when getImagesRequest is called', (done) => {
        const mock = new MockAdapter(axios);
        const data = { response: true };
        mock.onGet(url).reply(200, data);

        getImages().then((response) => {
            expect(response).toEqual(data);
            done();
        });
    });
});
