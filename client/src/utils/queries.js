import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            savedBooks {
                bookId
                author: [String]
                description
                title
                image
                link
            }
        }
    }
`;