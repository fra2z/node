var express = require("express");
var app = express();

//サーバサイド(バックエンド)のコード
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

var photolist = [
  {
    id: "001",
    name: "photo001.png",
    type: "png",
    dataUrl: "http://localhost:3000/data/photo001.png"
  },{
    id: "002",
    name: "photo002.png",
    type: "png",
    dataurl: "http://localhost:3000/data/photo002.png"
  }
  ]

  app.get("/api/photo/list",function(req, res, next){
    res.json(photolist);
  });
  
  //クライアント側でURIを指定したら画像が出てくる
  app.get("/api.photo/:photoid", function(req, res, next){
    var photo;
    for (i = 0; i < photolist.length; i++){
      if (photolist[i].id == req.params.photoid){
        var photo = photolist[i];
      }
    }
    res.json(photo);
  });

  // view Engine(UI)にEJSを指定
  app.set('view engine', 'ejs');

  //index.ejsを表示
  app.get("/", function(req, res, next){
    res.render("index", {});
  });
