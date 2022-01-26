<h1 align="center">Welcome to mini-mongo-logger 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/mini-mongo-logger" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/mini-mongo-logger.svg">
  </a>
  <a href="https://github.com/Avash027/mini-mongo-logger#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Avash027/mini-mongo-logger/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
    <img alt="License: MIT" src="https://img.shields.io/github/license/Avash027/mini-mongo-logger" />
  
</p>

> Add a really simple, lightweight and easy to use logger to your next MERN stack web application with just 2 lines of code.

### ✨ [NPM](https://www.npmjs.com/package/mini-mongo-logger)

## How to use

```js
const { initialize } = require("mini-mongo-logger");

initialize({
  production: process.env.NODE_ENV === "production",
  url: "Your mongodb url to store logs in your database",
});
```

## Install

```sh
npm install
```

Now you can use logger in your server

```js
const { logger } = require("mini-mongo-logger");
```

## Log types

```js
logger.success("success");
logger.warn("warn");
logger.error("error");
logger.info("info");
logger.other("other");
```

## Author

👤 **Avash Mitra**

- Website: https://www.linkedin.com/in/avash-mitra/
- Github: [@Avash027](https://github.com/Avash027)
- LinkedIn: [@avash-mitra](https://linkedin.com/in/avash-mitra)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Avash027/mini-mongo-logger/issues). You can also take a look at the [contributing guide](https://github.com/Avash027/mini-mongo-logger/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Avash Mitra](https://github.com/Avash027).<br />
This project is [MIT](https://github.com/Avash027/mini-mongo-logger/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
