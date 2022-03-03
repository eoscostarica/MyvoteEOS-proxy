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

export const FILTER_BP_QUERY = gql`
  query ($account: String!) {
    bp(where: { account: { _eq: $account } }) {
      account
      image_url
      website
    }
  }
`

export const ADD_USER_MAIL_MUTATION = gql`
  mutation insertEmail($object: user_email_insert_input!) {
    insert_user_email_one(object: $object) {
      id
    }
  }
`
