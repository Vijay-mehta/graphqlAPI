import {gql} from 'apollo-server';


const typeDefs=gql`
type Query{
    users:[User]
    user(_id:ID!):User
    quotes:[Quote]
    iquote(by:ID!):[Quote]
}
type User{
    _id:ID
    firstName:String
    lastName:String
    email:String
    password:String
    quotes:[Quote]
}
type Quote{
    by:ID
    name:String
}
type Mutation{
    signupUserDummy(userNew:userInput):User
}
input userInput{
    firstName:String!
    lastName:String!
     email:String!
      password:String!
}
`

export default typeDefs;