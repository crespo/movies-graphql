import { gql } from '@apollo/client';

const GET_DIRECTORS_QUERY = gql`
    {
        directors {
            name
            id
        }
    }
`

const GET_MOVIES_QUERY = gql`
    {
        movies {
            name
            genre
            id
        }
    }
`

export { 
    GET_DIRECTORS_QUERY,
    GET_MOVIES_QUERY 
}