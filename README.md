# Introduction

This is a [hexo](http://hexo.io) tag plugin which allows you to embed an image stored on CDN host.

## Installation

Run the following command in the root directory of Hexo:

```
npm install hexo-tag-imgurl --save
```

Then add your CDN url in your `_config.yml`.

```
# Imgurl
imgurl: <Your CDN url>
```

## Usage

```
{% imgurl imagePath [class1,class2,classN] imgAttr %}
```

Example:

```
# Imgurl
imgurl: http://example.com/images/
```

```
{% imgurl test-post/test.png ful-image alt:test.png %}
```

Will output the HTML:

```
<img src="http://example.com/images/test-post/test.png" class="full-image" alt="test.png">
```
