const mongoose=require("mongoose");

mongoose.connect(process.env.DB,{
      useNewUrlParser:true,
      useUnifiedTopology:true
  })
  .then(()=>{
        console.log("connected");
      }).catch((e)=>{
console.log("not connected");
  })
