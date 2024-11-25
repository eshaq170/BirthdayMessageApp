const request = require('supertest');
const app = require('../src/app'); // Import the app here

let server;

beforeAll(() => {
  server = app.listen(3000); // Start the server
});

afterAll((done) => {
  server.close(done); // Close the server after tests
});

describe('GET /', () => {
  it('should return the HTML page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Happy Birthday');
  });
});
