# dlbr-http2

Vue 2.0 + vue-router + vuex, http2, server-side rendering.

### Requires Node.js v9.0.0-pre

```bash
# https://github.com/nodejs/node/blob/master/BUILDING.md
$ git clone https://github.com/jasnell/node
$ cd node
$ git checkout initial-pr
$ ./configure --debug-http2 --debug-nghttp2
$ make -j8
# ommmmmmmmm
$ make test
$ ./node -e "console.log('Hello from Node.js ' + process.version)"
> Hello from Node.js v9.0.0-pre
$ sudo make install
```

```bash
# install dependencies
$ npm i

# serve in dev mode, with hot reload at 0.0.0.0
$ npm run dev

# build for production
$ npm run build

# serve in production mode
$ npm start
```

### License

The MIT License (MIT)

Copyright (c) 2017 Dalibor Gogic

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
