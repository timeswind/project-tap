import gql from 'graphql-tag';

export const LOGIN_MUTATION = gql`
	mutation login($email: String!, $password: String!) {
		authenticateUserWithPassword(email: $email, password: $password) {
			token,
			item {
				id
				name
				email
				isAdmin
			}
		}
    }
`
