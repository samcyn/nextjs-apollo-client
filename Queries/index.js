import gql from "graphql-tag";

export const GET_POST_QUERY = gql`
  query GETPOSTQUERY($postId: ID!) {
      getPost(postId: $postId){
        id
        description
        title
        createdAt
    }
  }
`;

export const FEED_QUERY = gql`
  query FeedQuery($first: Int, $skip: Int, $orderBy: PostOrderByInput) {
    feed(first: $first, skip: $skip, orderBy: $orderBy) {
      posts {
        id
        title
        description
        createdAt
      }
      count
    }
  }
`;


export const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $title: String!) {
    post(description: $description, title: $title) {
      id
      title
      description
      createdAt
    }
  }
`;
