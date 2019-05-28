import gql from 'graphql-tag';
import apollo from 'utils/apollo';

const ME = gql`
  {
    me {
      id
    }
  }
`;

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
    }
  }
`;

interface ISignInResponse {
  signIn: {
    id: string;
  };
}

export interface ISignInValues {
  email: string;
  password: string;
}

export default async (variables: ISignInValues) => {
  const data: ISignInResponse = await apollo.mutate({
    mutation: SIGN_IN,
    variables,
    refetchQueries: [{ query: ME }],
  });
  return data;
};
