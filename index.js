'use strict';

var hexoUtil = require('hexo-util');
var imgUrl = hexo.config.imgurl;


/**
 * Imgurl tag
 * 
 * Syntax:
 * ```
 * {% imgurl [class1,class2,classN] imagePath %}
 * ```
 */

hexo.extend.tag.register('imgurl', function(args){
  
  var imagePath = args[0];
  var classes = args[1] || "";
  var imgAttr = {};

  classes = classes.split(',');
  imgAttr.class = classes.join(' ');
  imgAttr.src = "//" + imgUrl + "/" + imagePath;


  return hexoUtil.htmlTag('img', imgAttr);
  
});