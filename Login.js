//////////////////////////////
//Database connection specs///
//////////////////////////////

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "jacobsladderintaketeam.cik1yin3pif1.us-east-1.rds.amazonaws.com",
  user: "intaketeam",
  password: "IwantanA123",
  database: "intaketeam"
});

////////////
//queries///
////////////

function createUser(userAttributes){
	var sql = "INSERT INTO User SET ?";
	
	con.query(sql, userAttributes, function(err, result){
		if (err) throw err;
		console.log(userAttributes.UserID + " Inserted");
	});
}

function deleteUser(userID) {
	var sql = "DELETE FROM User WHERE userID = ?";
	
	con.query(sql, userID, function(err, result){
		if (err) throw err;
		console.log(userID + " Removed");
	});
}
	
function getParentFirstName(UserID, callback){
	var sql = "SELECT firstName FROM User WHERE userID = ?";
	
	con.query(sql, UserID, function(err, result, fields) {
		if (err) throw err;
		return callback(result[0].firstName);
	});
}

function createChild(childAttributes) {
	var sql = "INSERT INTO Child SET ?";
	
	con.query(sql, childAttributes, function(err, result){
		if (err) throw err;
		console.log(childAttributes.ChildID + " Inserted");
	});
}

function getChildren(UserID, callback){
	var sql = "SELECT p.UserFirstName, p.UserLastName, c.ChildFirstName, c.ChildLastName "
				+"FROM User p "
				+"INNER JOIN Child c on p.UserID = c.ParentID "
				+"WHERE p.UserID = ?";

	con.query(sql, UserID, function(err, result, fields) {
		if (err) throw err;
		return callback(result[0]);
	});
}

//TODO
//function deleteChild()
//function deleteChildren()

/////////////////////////////////////
//IO objects and executing queries///
/////////////////////////////////////

var parentFirstNameReturn = '';
var childrenReturn = '';
const searchUser = 'EmilyTheCSGirl'
const newUser = {
	UserID: 'Cmaggio3',
	IsAdmin: 'False',
	UserFirstName: 'Emily',
	UserLastName: 'TooLazyToLookUp',
	Password: 'Password12345'
}
const newChild = {
	ChildID: "BillyBoy",
	ChildFirstName: "Billy",
	ChildLastName: "Fritterer",
	ParentID: "Cmaggio3"
}

//deleteUser(newUser.UserID);
//createUser(newUser);
//createChild(newChild);
getChildren(newUser.UserID, function(result) {
	childReturn = result;
	console.log(childReturn);
});


/*
getParentFirstName(searchUser, function(result){
	parentFirstNameReturn = result;
	console.log(parentFirstNameReturn);
});
*/