import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query {
    categories {
      name
      products {
        id
        attributes {
          name
        }
        name
        inStock
        gallery
        description
        category
        brand
        attributes {
          id
          name
          type
          items {
            id
            displayValue
            value
          }
        }
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
    currencies {
      symbol
    }
  }
`;

const categoryRequest = (category) => gql`
query {
  category (input: {title: "${category}"}) {
    products {
          id
          attributes {
            name
          }
          name
          inStock
          gallery
          description
          category
          brand
          attributes {
            id
            name
            type
            items {
              id
              displayValue
              value
            }
          }
          prices {
            currency {
              symbol
            }
            amount
          }
        }
  }
  }
          
`;

export const GET_ONE_PRODUCT = (productID) => gql`
query {
  product(id: "${productID}") {
    name
    inStock
    gallery
    description
    category
    attributes {
      
      name
      items {
        id
        value
        displayValue
      }
    }
    prices {
      amount
      currency {
        symbol
      }
    }
    brand
  }
}
`;

export { categoryRequest };
