import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Emote = {
  id: Scalars['Int'];
  name: Scalars['String'];
  count: Scalars['Int'];
  gif: Scalars['String'];
};

export type EmoteCreateInput = {
  name: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  gif?: Maybe<Scalars['String']>;
};

export type EmoteUpdateInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  count?: Maybe<IntFieldUpdateOperationsInput>;
  gif?: Maybe<StringFieldUpdateOperationsInput>;
};

export type EmoteWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  createOneEmote: Emote;
  updateOneEmote?: Maybe<Emote>;
  deleteOneEmote?: Maybe<Emote>;
  incrementOneEmote?: Maybe<Emote>;
};


export type MutationCreateOneEmoteArgs = {
  data: EmoteCreateInput;
};


export type MutationUpdateOneEmoteArgs = {
  data: EmoteUpdateInput;
  where: EmoteWhereUniqueInput;
};


export type MutationDeleteOneEmoteArgs = {
  where: EmoteWhereUniqueInput;
};


export type MutationIncrementOneEmoteArgs = {
  name: Scalars['String'];
  gif: Scalars['String'];
};

export type Query = {
  emote?: Maybe<Emote>;
  emotes: Array<Emote>;
};


export type QueryEmoteArgs = {
  where: EmoteWhereUniqueInput;
};


export type QueryEmotesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<EmoteWhereUniqueInput>;
  after?: Maybe<EmoteWhereUniqueInput>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type CreateOneEmoteMutationVariables = Exact<{
  data: EmoteCreateInput;
}>;


export type CreateOneEmoteMutation = { createOneEmote: { id: number, name: string, count: number } };

export type IncrementOneEmoteMutationVariables = Exact<{
  name: Scalars['String'];
  gif: Scalars['String'];
}>;


export type IncrementOneEmoteMutation = { incrementOneEmote?: Maybe<{ id: number, name: string, count: number, gif: string }> };

export type UpdateOneEmoteMutationVariables = Exact<{
  data: EmoteUpdateInput;
  name: Scalars['String'];
}>;


export type UpdateOneEmoteMutation = { updateOneEmote?: Maybe<{ id: number, name: string, count: number }> };

export type GetEmotesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmotesQuery = { emotes: Array<{ id: number, name: string, count: number, gif: string }> };

export const namedOperations = {
  Query: {
    GetEmotes: 'GetEmotes'
  },
  Mutation: {
    createOneEmote: 'createOneEmote',
    IncrementOneEmote: 'IncrementOneEmote',
    UpdateOneEmote: 'UpdateOneEmote'
  }
}

export const CreateOneEmoteDocument = gql`
    mutation createOneEmote($data: EmoteCreateInput!) {
  createOneEmote(data: $data) {
    id
    name
    count
  }
}
    `;
export type CreateOneEmoteMutationFn = Apollo.MutationFunction<CreateOneEmoteMutation, CreateOneEmoteMutationVariables>;

/**
 * __useCreateOneEmoteMutation__
 *
 * To run a mutation, you first call `useCreateOneEmoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneEmoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneEmoteMutation, { data, loading, error }] = useCreateOneEmoteMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneEmoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneEmoteMutation, CreateOneEmoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneEmoteMutation, CreateOneEmoteMutationVariables>(CreateOneEmoteDocument, options);
      }
export type CreateOneEmoteMutationHookResult = ReturnType<typeof useCreateOneEmoteMutation>;
export type CreateOneEmoteMutationResult = Apollo.MutationResult<CreateOneEmoteMutation>;
export type CreateOneEmoteMutationOptions = Apollo.BaseMutationOptions<CreateOneEmoteMutation, CreateOneEmoteMutationVariables>;
export const IncrementOneEmoteDocument = gql`
    mutation IncrementOneEmote($name: String!, $gif: String!) {
  incrementOneEmote(name: $name, gif: $gif) {
    id
    name
    count
    gif
  }
}
    `;
export type IncrementOneEmoteMutationFn = Apollo.MutationFunction<IncrementOneEmoteMutation, IncrementOneEmoteMutationVariables>;

/**
 * __useIncrementOneEmoteMutation__
 *
 * To run a mutation, you first call `useIncrementOneEmoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIncrementOneEmoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [incrementOneEmoteMutation, { data, loading, error }] = useIncrementOneEmoteMutation({
 *   variables: {
 *      name: // value for 'name'
 *      gif: // value for 'gif'
 *   },
 * });
 */
export function useIncrementOneEmoteMutation(baseOptions?: Apollo.MutationHookOptions<IncrementOneEmoteMutation, IncrementOneEmoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IncrementOneEmoteMutation, IncrementOneEmoteMutationVariables>(IncrementOneEmoteDocument, options);
      }
export type IncrementOneEmoteMutationHookResult = ReturnType<typeof useIncrementOneEmoteMutation>;
export type IncrementOneEmoteMutationResult = Apollo.MutationResult<IncrementOneEmoteMutation>;
export type IncrementOneEmoteMutationOptions = Apollo.BaseMutationOptions<IncrementOneEmoteMutation, IncrementOneEmoteMutationVariables>;
export const UpdateOneEmoteDocument = gql`
    mutation UpdateOneEmote($data: EmoteUpdateInput!, $name: String!) {
  updateOneEmote(where: {name: $name}, data: $data) {
    id
    name
    count
  }
}
    `;
export type UpdateOneEmoteMutationFn = Apollo.MutationFunction<UpdateOneEmoteMutation, UpdateOneEmoteMutationVariables>;

/**
 * __useUpdateOneEmoteMutation__
 *
 * To run a mutation, you first call `useUpdateOneEmoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneEmoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneEmoteMutation, { data, loading, error }] = useUpdateOneEmoteMutation({
 *   variables: {
 *      data: // value for 'data'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateOneEmoteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneEmoteMutation, UpdateOneEmoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneEmoteMutation, UpdateOneEmoteMutationVariables>(UpdateOneEmoteDocument, options);
      }
export type UpdateOneEmoteMutationHookResult = ReturnType<typeof useUpdateOneEmoteMutation>;
export type UpdateOneEmoteMutationResult = Apollo.MutationResult<UpdateOneEmoteMutation>;
export type UpdateOneEmoteMutationOptions = Apollo.BaseMutationOptions<UpdateOneEmoteMutation, UpdateOneEmoteMutationVariables>;
export const GetEmotesDocument = gql`
    query GetEmotes {
  emotes {
    id
    name
    count
    gif
  }
}
    `;

/**
 * __useGetEmotesQuery__
 *
 * To run a query within a React component, call `useGetEmotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEmotesQuery(baseOptions?: Apollo.QueryHookOptions<GetEmotesQuery, GetEmotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEmotesQuery, GetEmotesQueryVariables>(GetEmotesDocument, options);
      }
export function useGetEmotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEmotesQuery, GetEmotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEmotesQuery, GetEmotesQueryVariables>(GetEmotesDocument, options);
        }
export type GetEmotesQueryHookResult = ReturnType<typeof useGetEmotesQuery>;
export type GetEmotesLazyQueryHookResult = ReturnType<typeof useGetEmotesLazyQuery>;
export type GetEmotesQueryResult = Apollo.QueryResult<GetEmotesQuery, GetEmotesQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    