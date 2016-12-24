'use strict';

var hexoUtil = require('hexo-util');
var imgUrl = hexo.config.imgurl;


/**
 * Imgurl tag
 * 
 * Syntax:
 * ```
 * {% imgurl imagePath [class1,class2,classN] imgAttr %}
 * ```
 */

hexo.extend.tag.register('imgurl', function(args){
  var imagePath = args[0];
  var classes = args[1] || "";
  var imgAttr = {};

  for (var i = 2; i < args.length; i++) {
    var item = args[i];
    if(item[0] === '\'' || item[0] === '"') {
      item = item.substring(1, item.length - 1);
    }

    var parseAttr = item.split(':');
    imgAttr[parseAttr[0]] = parseAttr[1];
  }

  classes = classes.split(',');
  imgAttr.class = classes.join(' ');
  imgAttr.src = "//" + imgUrl + "/" + imagePath;


  return hexoUtil.htmlTag('img', imgAttr);
  
});