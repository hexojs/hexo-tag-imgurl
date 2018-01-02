'use strict';

const hexoUtil = require('hexo-util')
const imgUrl = hexo.config.imgurl
const httpsMod = hexo.config.httpsMod
const rImgAttr = /[\:]+/
const rImgUrl = /(.png|.jpg|.gif|.bmp){1}/

/**
 * Imgurl tag
 * 
 * Syntax:
 * ```
 * {% imgurl imagePath [class1,class2,classN] imgAttr %}
 * ```
 */

hexo.extend.tag.register('imgurl', (args) => {
  let imgAttr = {}

  for (let i = 0; i < args.length; i++) {
    let item = args[i]

    if (rImgAttr.test(item)) {

      if (item[0] === '\'' || item[0] === '"') {
        item = item.substring(1, item.length -1)
      }

      let parseAttr = item.split(':')

      imgAttr[parseAttr[0]] = parseAttr[1]

    } else if (rImgUrl.test(teim)) {
      let protocol = (httpsMod) => {
        switch(httpsMod) {
          case true:
            return "https://"
            break
          case false:
            return "http://"
          default:
            return "//"
        }
      }
      
      imgAttr.src = `${protocol(httpsMod)}${imgUrl}/${item}` 
    } else {
      imgAttr.class = item.split(',').join(' ')
    }

  }

  return hexoUtil.htmlTag('img', imgAttr);

})
