# Dev London website

## Server

### Docker Build

`docker build -t devldn.ca .`

### Docker Run

Environment Variables

PORT=5000
HOST=0.0.0.0
TOKEN=abc123
NODE_ENV=production

`docker run -it --rm -e PORT=5000 -e HOST=0.0.0.0 -e TOKEN=abc123 -e NODE_ENV=production -p 5000:5000 devldn.ca`

## Client

[![Build Status](https://drone.jesseobrien.dev/api/badges/LadyCarni/lunanova2019/status.svg)](https://drone.jesseobrien.dev/LadyCarni/lunanova2019)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

### Get up and running

```
cp .env.example .env
npm install
npm start
```

### Features

This project is built with `Create React App`

This project uses:

- `husky` to run githooks
- `lint-staged` to run scripts on staged files on git ([learn more](https://medium.com/@okonetchnikov/make-linting-great-again-f3890e1ad6b8))
- `prettier` to auto-format our js
- `stylelint` to lint our scss
- [Lindua icons](https://icomoon.io/icons-lindua.html)
- Google font: [Teko](https://fonts.google.com/specimen/Teko)
