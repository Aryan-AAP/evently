import mongoose from "mongoose"
const mongoDbURI=process.env.MONGODB_URI

let cashed= (global as any).mongoose || {conn:null, promise:null}

export const connectToDatabase=async ()=>{
    if(cashed.conn)return cashed.conn
    
if (!mongoDbURI) {
    throw new Error("MONGODB_URI environment variable is not defined");
}

    cashed.promise=cashed.promise || mongoose.connect(mongoDbURI,{
        dbName:'evently',
        bufferCommands:false
    })
cashed.conn=await cashed.promise
return cashed.conn

}