var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var campgrounds=[
		{name:"spiti valley",image:"https://ihplb.b-cdn.net/wp-content/uploads/2014/12/Lahual-spiti.jpg"},
		{name:"Jaisalmer",image:"https://ihplb.b-cdn.net/wp-content/uploads/2014/06/Camping-in-Jaisalmer.jpg"},
		{name:"Chandertal Lake",image:"https://ihplb.b-cdn.net/wp-content/uploads/2014/06/camping-at-Chandertal-Lake.jpg"}
	];

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");


app.get("/",function(req,res){
	// res.send("This is landing page ");
	res.render("landing");
});

app.get("/campgrounds",function(req,res){
	
	res.render("campgrounds",{campgrounds:campgrounds});

});

app.post("/campgrounds",function(req,res){
	// This is where we get the campground data
	// which is sent from campgrounds/new form
	var name=req.body.name;
	var image=req.body.image;
	var newCampground={name:name,image:image};
	campgrounds.push(newCampground);

	res.redirect("/campgrounds");

});

app.get("/campgrounds/new",function(req,res){
	res.render("new");
});


app.listen(3000,function(){
	console.log("YELP CAMP Server has started!!!");
});