# CMS

## 目的

为了模拟一个真实的项目供测试使用，考虑用当下流行的解耦系统设计(e.g [JAM STACK](https://jamstack.org/what-is-jamstack/))。因此我们需要前端的APP，也需要后端服务。

这里使用一个CMS作为后端服务。CMS是内容管理系统的意思。这个项目基于[Strapi](https://strapi.io/)，一个API驱动的开源CMS。

## 测试

可以添加以下测试作为学习。

- API 测试（Postman, Pact...）
- 性能测试(Load testing? 不清楚Heroku免费账户是否能够承受)

## 部署

这个项目部署在Heroku上。暂时手动部署(https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html)。后面会用Github自动部署(https://devcenter.heroku.com/articles/github-integration)。

## 使用

域名 https://zjs-cms.herokuapp.com

管理入口 https://zjs-cms.herokuapp.com/admin

API例子

- 获取内容清单 https://zjs-cms.herokuapp.com/the-art-of-wars
- 获取单个内容 https://zjs-cms.herokuapp.com/the-art-of-wars/1
