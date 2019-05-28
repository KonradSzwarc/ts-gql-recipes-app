import gql from 'graphql-tag';
import apollo from 'utils/apollo';

export const SIGN_UP = gql`
  mutation signUp($data: UserCreateInput!) {
    signUp(data: $data) {
      id
    }
  }
`;

interface ISignUpResponse {
  signUp: {
    id: string;
  };
}

export interface ISignUpValues {
  email: string;
  password: string;
  fullName: string;
}

export default async (variables: ISignUpValues) => {
  const data: ISignUpResponse = await apollo.mutate({
    mutation: SIGN_UP,
    variables: { data: variables },
  });
  return data;
};
