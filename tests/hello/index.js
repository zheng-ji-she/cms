const request = require('supertest');

const { grantPrivilege } = require("../helpers/strapi");

it('should return hello world', async () => {
  await grantPrivilege(2, "permissions.application.controllers.hello.index");  

  await request(strapi.server) // app server is an instance of Class: http.Server
    .get('/hello')
    .expect(200) // Expect response http code 200
    .then((data) => {
      expect(data.text).toBe('Hello World!');// expect the response text
    });
})
