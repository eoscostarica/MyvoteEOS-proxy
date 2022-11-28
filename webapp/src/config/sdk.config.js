export const endpoint = `${process.env.REACT_APP_UAL_API_PROTOCOL}://${
  process.env.REACT_APP_UAL_API_HOST
}${process.env.REACT_APP_UAL_API_PORT ? ':' : ''}${
  process.env.REACT_APP_UAL_API_PORT
}`

export const producersInfoApiUrl =
  process.env.REACT_APP_PRODUCERS_INFO_API_URL ||
  'https://graphql-eos.antelope.tools/api/rest/get-producers-info'
