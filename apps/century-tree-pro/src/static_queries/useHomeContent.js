import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
  query getHomeData {
    site {
      siteMetadata {
        HomeContent {
            vimeo_feature,
            client_image,
            client_info,
          grid_items {
            title
            profile_picture 
            description
            image
          }
        }
      }
    }
  }
  `)
  return data.site.siteMetadata
}