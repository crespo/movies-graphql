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

const ADD_MOVIE_MUTATION = gql`
    mutation($name:String!, $genre:String!, $directorId:ID!) {
        addMovie (name:$name, genre:$genre, directorId:$directorId){
            name
            id
        }
    }
`

const ADD_DIRECTOR_MUTATION = gql`
    mutation($name:String!, $age:Int!) {
        addDirector (name:$name, age:$age){
            name
            id
        }
    }
`

const GET_MOVIE_QUERY = gql`
    query($id:ID!) {
        movie(id:$id) {
            name
            genre
            director {
                id
                name
                age
                movies {
                    name
                    id
                }
            }
        }
    }
`

export { 
    GET_DIRECTORS_QUERY,
    GET_MOVIES_QUERY,
    ADD_MOVIE_MUTATION,
    ADD_DIRECTOR_MUTATION,
    GET_MOVIE_QUERY
}