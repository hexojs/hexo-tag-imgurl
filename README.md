# DEPRECATED!

hexo-tag-imgurl has been deprecated.

# Introduction

[![npm](https://img.shields.io/npm/v/hexo-tag-imgurl.svg?style=flat-square)](https://www.npmjs.com/package/hexo-tag-imgurl)  [![npm](https://img.shields.io/npm/dm/hexo-tag-imgurl.svg?style=flat-square)](https://www.npmjs.com/package/hexo-tag-imgurl)  [![npm](https://img.shields.io/npm/dt/hexo-tag-imgurl.svg?style=flat-square)](https://www.npmjs.com/package/hexo-tag-imgurl)  [![npm](https://img.shields.io/npm/l/hexo-tag-imgurl.svg?style=flat-square)](https://www.npmjs.com/package/hexo-tag-imgurl)

This is a [hexo](http://hexo.io) tag plugin which allows you to embed an image stored on CDN host.

## Installation

Run the following command in the root directory of Hexo:

```
npm install hexo-tag-imgurl --save
```

Then add your CDN url in your site `_config.yml`.

```
# Imgurl
# Important: This value starts without a protocol and it doesn't end with '/'.
# httpsMod: true | false 
# If the value not set, image url will automatically adapt to the site's protocol.
imgurl: example.com/images
httpsMod:
```

## Usage

```
{% imgurl imagePath [class1,class2,classN] imgAttr %}
```

Example:

```
# Imgurl
# Important: This value starts without a protocol and it doesn't end with '/'.
imgurl: example.com/images
```

```
{% imgurl test-post/test.png ful-image alt:test.png %}
```

Will output the HTML:

```
<img src="//example.com/images/test-post/test.png" class="full-image" alt="test.png">
```

## TODO

- [ ] Delete images after sync.
- [ ] No article path required.
- [ ] Built-in third party sync.
- [ ] Add test script.
