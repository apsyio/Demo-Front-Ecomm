import {gql} from 'graphql-request';

export const GET_RECOMMENDED_BRAND = gql`
  query brand_recommendBrand {
    brand_recommendBrand {
      result {
        name
        thumbnail
        brandSizes {
          id
          brandId
          sizeId
          size {
            id
            size
            isDeleted
          }
        }
        likesCount
        photos {
          key
          value
        }
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
        createdAt
      }
      status
    }
  }
`;
