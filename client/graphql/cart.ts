import { gql } from "graphql-tag";

export const GET_CARTS = gql`
  query GET_CARTS {
    cart {
      id
      amount
      product {
        id
        brand
        name
        image_url
        origin_price
        discount
        createdAt
        category {
          category_lg
          category_md
          category_sm
        }
      }
    }
  }
`;
export const ADD_CART = gql`
  mutation ADD_CART($id: ID!, $count: Int) {
    addCart(productId: $id, count: $count) {
      id
      amount
      product {
        id
        brand
        name
        image_url
        origin_price
        discount
        createdAt
        category {
          category_lg
          category_md
          category_sm
        }
      }
    }
  }
`;