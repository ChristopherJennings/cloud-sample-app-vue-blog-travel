
import { ContentItem } from 'kentico-cloud-delivery'

/**
* This class was generated by 'kentico-cloud-model-generator-utility' at Tue Oct 09 2018 14:23:06 GMT-0400 (Eastern Daylight Time).
*/
export class TaxonomyDetails extends ContentItem {
  constructor () {
    super({
      propertyResolver: (fieldName) => {
        if (fieldName === 'feature_image') {
          return 'featureImage'
        }
        return fieldName
      }
    })
  }
}
