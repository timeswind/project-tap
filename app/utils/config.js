const env = process.env.NODE_ENV || 'development';

const configs = {
  development: {
    graphql_api: 'http://localhost:3000/api/',
  },
  staging: {
    graphql_api: 'http://localhost:3000/api/',
  },
  production: {
    graphql_api: 'http://localhost:3000/api/',
  },
}[env];

export default configs;