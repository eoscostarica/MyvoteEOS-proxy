import { gql } from '@apollo/client'

export const COUNT_VOTES_QUERY = gql`
  query {
    proxy_votes_aggregate(distinct_on: voter) {
      aggregate {
        count
      }
    }
  }
`
export const GET_VOTERS_QUERY = gql`
  query {
    proxy_votes(distinct_on: voter) {
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
