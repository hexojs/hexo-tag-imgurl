'use strict';

var hexoUtil = require('hexo-util');
var imgUrl = hexo.config.imgurl;
var rImgAttr = /[\:]+/;
var rImgUrl = /(.png|.jpg|.gif|.bmp){1}/;

/**
 * Imgurl tag
 * 
 * Syntax:
 * ```
 * {% imgurl imagePath [class1,class2,classN] imgAttr %}
 * ```
 */

hexo.extend.tag.register('imgurl', function(args){
  
  var imgAttr = {};

  for (var i = 0; i < args.length; i++) {
    var item = args[i];

    if (rImgAttr.test(item)) {

      if (item[0] === '\'' || item[0] === '"') {
        item = item.substring(1, item.length - 1);
      }

      var parseAttr = item.split(':');

      imgAttr[parseAttr[0]] = parseAttr[1];
      } else if (rImgUrl.test(item)) {
        imgAttr.src = "//" + imgUrl + "/" + item;
      } else {
        imgAttr.class = item.split(',').join(' ');
      }
  }

  return hexoUtil.htmlTag('img', imgAttr);

});