
import { ContentItem } from 'kentico-cloud-delivery'

/**
* This class was generated by 'kentico-cloud-model-generator-utility' at Tue Oct 09 2018 14:23:06 GMT-0400 (Eastern Daylight Time).
*/
export class HtmlEmbed extends ContentItem {
  constructor () {
    super({
      propertyResolver: (fieldName) => {
        if (fieldName === 'embed_code') {
          return 'embedCode'
        }
        return fieldName
      }
    })
  }
}
