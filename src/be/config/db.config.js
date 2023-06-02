/*const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/8080/message',{useNewUrlParser:true,
useUnifiedTopology:true
});

const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',()=>{console.log('connected to MongoDB!');
});*/

/*const postSchema= new mongoose.Schema({title: String,
body: String});

const Post= mongoose.model('Post',postSchema);

app.get('/posts',(req,res)=>
{Post.find((err,posts) => {
    if (err) return res.status(500).send(err);

    res.json(posts);
});
});*/
