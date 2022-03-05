import {gql} from 'graphql-request';

export const GET_RECOMMENDED_BRAND = gql`
  query brand_recommendBrand {
    brand_recommendBrand {
      result {
        name
        thumbnail
        sizeOffered
        likesCount
        photos
        userBrands {
          userId
          brandId
          id
          isDeleted
        }
        brandLikes {
          userId
          brandId
          liked
          id
          isDeleted
        }
        posts {
          title
          content
          photo
          brandId
          styleId
          postType
          sizeOffered
          posterId
          postedAt
          id
          isDeleted
        }
        styleBrands {
          styleId
          brandId
          id
          isDeleted
        }
        id
        isDeleted
      }
      status
    }
  }
`;
