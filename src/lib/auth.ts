import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";
const authOptions:NextAuthOptions={
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email:{
                    label:'Email',
                    type:'text'     
                },
                password:{
                    label:'Password',
                    type:'password'     
                }
            },
            authorize(credentials,req){
                
            },
        })
    ],
    callbacks:{

    },
    session:{

    },
    pages:{

    },
    secret:"hdjksjwkd"
}
export default authOptions;