const express = require("express")
const path = require("path")
const multer = require("multer")
const bodyParser = require("body-parser")
const fs = require('fs')
const { config } = require('dotenv');
const { join } = require('path');
const app = express()

// Load environment variables
config();

// Serve static files
app.use(express.static(join(__dirname, 'public')));
app.use(express.static(join(__dirname, 'labeled_images')));

// View Engine Setup
app.set("views", path.join(__dirname, "public"))
app.set("view engine", "ejs")


// var upload = multer({ dest: "Upload_folder_name" })
// If you do not want to use diskStorage then uncomment it

var storage = multer.diskStorage({
	destination: function (req, file, cb) {

		// Uploads is the Upload_folder_name
		cb(null, "labeled_images/" + person_name)
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + ".jpg")
		// cb(null, file.fieldname + "-" + Date.now()+".jpg")
	}
})

// Define the maximum size for uploading
// picture i.e. 1 MB. it is optional
// const maxSize = 1 * 1000 * 1000;

var upload = multer({
	storage: storage,
	// limits: { fileSize: maxSize },
	fileFilter: function (req, file, cb) {

		// Set the filetypes, it is optional
		var filetypes = /jpeg|jpg|png/;
		var mimetype = filetypes.test(file.mimetype);

		var extname = filetypes.test(path.extname(
			file.originalname).toLowerCase());

		if (mimetype && extname) {
			return cb(null, true);
		}

		cb("Error: File upload only supports the "
			+ "following filetypes - " + filetypes);
	}

});

// Add routes
app.get('/', (req, res) => {
	const page = fs.readFileSync('index.html');
	res.send(page.toString());
});

app.get("/register", function (req, res) {
	res.render("register");
});



// app.get('/1.jpg', function (req, res) {
// 	res.sendFile(__dirname + '/views/1.jpg');
// })





var person_name = "person_name";
app.use(bodyParser.urlencoded({ extended: true })); //middleware for bodyparser
app.post("/up", function (req, res) {
	person_name = req.body.text1;
	const dir = './labeled_images/' + person_name;
	fs.mkdir(dir, (err) => {
		if (err) {
			throw err;
		}
		console.log("Directory is created");
	});

	const file = 'labels.push("' + person_name + '");';
	fs.appendFile('./public/data.js', file, function (err) {
		if (err) throw err;
		console.log('data.js appended');
	});

	res.render("upload");
})

app.post("/uploadProfilePicture", function (req, res, next) {

	// Error MiddleWare for multer file upload, so if any
	// error occurs, the image would not be uploaded!
	upload.fields([{ name: '1', maxCount: 1 }, { name: '2', maxCount: 1 }, { name: '3', maxCount: 1 }, { name: '4', maxCount: 1 }, { name: '5', maxCount: 1 }])(req, res, function (err) {

		if (err) {

			// ERROR occured (here it can be occured due
			// to uploading image of size greater than
			// 1MB or uploading different file type)
			res.send(err)
		}
		else {

			// SUCCESS, image successfully uploaded
			res.render("success")
		}
	})
})

// Take any port number of your choice which
// is not taken by any other process
app.listen(8080, function (error) {
	if (error) throw error
	console.log("Server created Successfully on PORT 8080")
	console.log("http://127.0.0.1:8080   for local host")
})
