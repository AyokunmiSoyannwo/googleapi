const request = require('supertest');
const server = require('../app');
const data = require('../data')

describe("API server", () => {
    let api;
    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(5000, () =>
            console.log('Test server running on port 5000')
        );
    });
    afterAll((done) => {
        // close the server, then run done
        console.log('Gracefully stopping test server');
        api.close(done);
    });
    it('responds to get /results with status 200', (done) => {
        request(api)
        .get('/results')
        .expect(200, done);
    });
    it('shows results array', (done) => {
        request(api)
        .get('/results')
        .expect(data, done)
    })
    it('shows random object from results array', (done) => {
        request(api)
        .get('/results/random')
        .expect(data.includes())
    })
})
