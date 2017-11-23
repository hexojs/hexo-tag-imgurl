'use strict';

var hexoUtil = require('hexo-util');
var imgUrl = hexo.config.imgurl;
var httpsMod = hexo.config.httpsMod;
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
        let protocol = function(httpsMod) {
          if (httpsMod === true) {
            return "https://"
          } else if (httpsMod === false) {
            return "http://"
          } else {
            return "//"
          }
        }
        imgAttr.src = protocol(httpsMod) + imgUrl + "/" + item;
      } else {
        imgAttr.class = item.split(',').join(' ');
      }
  }

  return hexoUtil.htmlTag('img', imgAttr);

});