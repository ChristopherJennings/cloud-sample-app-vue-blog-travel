
import { getFeatureImage } from '../helpers'
import { ContentItem } from 'kentico-cloud-delivery'

export class Page extends ContentItem {
  constructor () {
    super({
      propertyResolver: (fieldName) => {
        if (fieldName === 'metadata__page_description') {
          return 'metadataPageDescription'
        }
        if (fieldName === 'metadata__page_title') {
          return 'metadataPageTitle'
        }
        if (fieldName === 'front_matter__title') {
          return 'frontMatterTitle'
        }
        if (fieldName === 'front_matter__feature_image') {
          return 'frontMatterFeatureImage'
        }
        return fieldName
      }
    })
  }
}

export function flatten (item) {
  if (!item) return null
  const featureImageUrl = getFeatureImage(item)

  return {
    id: item.system.id,
    codename: item.system.codename,
    title: item.frontMatterTitle.value,
    featureImageUrl,
    slug: item.slug.value,
    body: item.body.resolveHtml()
  }
}
