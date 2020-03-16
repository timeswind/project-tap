import gql from 'graphql-tag';

const JOBS_QUERY = gql`
  query allProfile {
    allProfiles {
      id
    }
  }
`;

export default JOBS_QUERY;