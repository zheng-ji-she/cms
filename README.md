# CMS

## 目的

为了模拟一个真实的项目供测试使用，考虑用当下流行的解耦系统设计(e.g [JAM STACK](https://jamstack.org/what-is-jamstack/))。因此我们需要前端的APP，也需要后端服务。

这里使用一个CMS作为后端服务。CMS是内容管理系统的意思。这个项目基于[Strapi](https://strapi.io/)，一个API驱动的开源CMS。

## 测试

- Unit test. 在`/tests`目录下，具体参考[Strapi Unit Testing](https://strapi.io/documentation/developer-docs/latest/guides/unit-testing.html).
- API test. 在`/tests/hello`目录下，使用supertest，具体参考[Testing basic endpoint controller](https://strapi.io/documentation/developer-docs/latest/guides/unit-testing.html#testing-basic-endpoint-controller).
- Postman API test. 位置在Github Actions`.github/workflows/newman.yml`。具体参考[newman-action](https://github.com/marketplace/actions/newman-action).

### TODO

- API 测试（Pact...）
- 性能测试(Load testing? 不清楚Heroku免费账户是否能够承受)

## CI

Github Action

## 部署

这个项目部署在Heroku上。使用[Github自动部署](https://devcenter.heroku.com/articles/github-integration)。

## 使用

域名 https://zjs-cms.herokuapp.com

管理入口 https://zjs-cms.herokuapp.com/admin

API例子

- 获取内容清单 https://zjs-cms.herokuapp.com/the-art-of-wars
- 获取单个内容 https://zjs-cms.herokuapp.com/the-art-of-wars/1
