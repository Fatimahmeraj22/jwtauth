import express from "express"
import config from "config";
import "./utils/controllers/users/index"
const app = express ( );
const PORT = 5005
app.use
app.get("/", (req,res)=> {
    try {
        res.status(200).json({msge :"HELlo world "})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})
app.use("api/user", Router)

app.listen (PORT , () => {
    console.log(`server is up and running ${PORT}`);
}) 