const request = require('supertest');

const { grantPrivilege } = require("../helpers/strapi");

beforeAll(async () => {
  await grantPrivilege(2, "permissions.application.controllers.hello.index");  // Gives Public access to endpoint
});

it('should return hello world', () => {
  return request(strapi.server) // app server is an instance of Class: http.Server
    .get('/hello')
    .expect(200) // Expect response http code 200
    .then((data) => {
      expect(data.text).toBe('Hello World!');// expect the response text
    });
})
