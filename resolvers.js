import {users,quotes} from './fackdb.js'
import {randomBytes} from 'crypto'
const resolvers={
    Query:{
      users:()=>users,
      quotes:()=>quotes,
   
        user:(_,{_id})=>users.find(user=>user._id == _id),
        iquote:(_,{by})=>quotes.filter(quote=>quote.by == by)
    },
    User:{
        quotes:(users)=>quotes.filter(Quote=>Quote.by==users._id)
    },
    Mutation:{
        signupUserDummy:(_,{userNew})=>{
            const _id =randomBytes(5).toString("hex")
            users.push({
                _id,
                ...userNew
            })
            return users.find(user=>user._id == _id)

        }
    }
}

export default resolvers