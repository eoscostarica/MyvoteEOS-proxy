import { gql } from '@apollo/client'

export const GET_VOTERS_QUERY = gql`
  query getVoters($limit: Int = 15, $offset: Int = 0) {
    pagination: proxy_votes_aggregate(distinct_on: voter) {
      aggregate {
        count
      }
    }
    voters: proxy_votes(distinct_on: voter, limit: $limit, offset: $offset) {
      voter
      balance
    }
  }
`
export const GET_EXCHANGES_QUERY = gql`
  query {
    exchange {
      name
      t_username
      total_mention
      url
      image_url
    }
  }
`
