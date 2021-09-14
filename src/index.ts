import express from 'express';
import {listings} from'./listings';
import bodyParser from "body-parser";
const app=express();
const port=9000;

const one=1;
const two=2;

app.use(bodyParser.json());
/*BodyParser is a middleware that uses to parse the request into json
 format where we can extract objects inside it*/
app.get("/",(_req,res)=>res.send(`1+2=${one+two}`));
app.get("/listings",(_req,res)=>{
    return res.send(listings);
});
app.post("/delete-listing",(req,res)=>{
    const id:string=req.body.id;
    for(let i=0; i<listings.length;i++){
        if(listings[i].id===id){
            return res.send(listings.splice(i,1));
        }
    }

})

app.listen(port);
console.log(`[app]:http//localhost:${port}`);