var mongoose = require('mongoose');
mongoose.connect('mongodb://meli:drinkwater1@ds163510.mlab.com:63510/blog_csdb');

//create new schema 
var postSchema = new mongoose.Schema({
  title:String,
  content:String
});
var userSchema = new mongoose.Schema({
  name:String,
  email:String,
  posts:[postSchema]
});

//save schema into  variable
var Post =  mongoose.model('Post', postSchema);
var User =  mongoose.model('User', userSchema);

//create a sample record 
// var newPost = new Post({
//   title:"Lucy Star",
//   content:"sugar spice"
// })
// var newUser = new User({
//   name: 'Bob Loblaw', 
//   email:'BobLoblaw@gmail.com'
// });

// newUser.posts.push({
//   title:'Why Bob Loblaw blogs about the Law', 
//   content: 'Blah blah blah blah'
// });

//store sample in db 
// newPost.save(function(err, post){
//   if(err){
//     console.log('something is effed up');
//   }else{
//     console.log('it works! i saved first post to the db:');
//     console.log(post);
//        }
// });
// newUser.save(function(err, user){
//   if(err){
//     console.log('something is effed up');
//   }else{
//     console.log('it works! i saved first user to the db:');
//     console.log(user);
//        }
// });




User.findOne({name: 'Bob Loblaw'}, function(err, user){
  if(err){
    console.log(err);
  } else {
    console.log(user);
    user.posts.push({
      title: 'Bob Loblaw no habla Espanol',
      content: 'I wish I could learn Spanish'
    });
    user.save(function(err, user){
      if(err){
        console.log(err);
      } else {
        console.log(user);
      }
    })
  }
})
