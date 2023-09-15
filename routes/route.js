exports.home=function(req,res){
  res.render('home', { helloMessage : process.env.HELLO_MESSAGE });
}


exports.login=function(req,res){ 
    res.render('login');
}

