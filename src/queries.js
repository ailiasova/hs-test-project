import {gql} from "@apollo/client";

export const CONTINENTS_QUERY = gql`
  query {
  continents {
    name,
    code,
    countries{
      code,
      name,
      emoji,
      languages{
        code,
        name
      }
    }
  }
}
`;

export const COUNTRIES_QUERY = gql`
query Counties($continent: String!){
  countries(filter: {continent: {eq: $continent}}){
    code
    name
    emoji
    languages {
      code,
      name
    }
  }
}
`;
