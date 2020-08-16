var mysql = require('mysql');

var getConnection = function( callback ){
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database: 'management_system'
	});

	connection.connect(function(err) {
	  if (err) {
	    console.error('error connecting: ' + err.stack);
	    callback(null);
	  }
	  console.log('connected as id ' + connection.threadId);
	  callback(connection);
	});
};


module.exports ={
	getResults: function(sql, params, callback){
		getConnection(function(connection){
			if(params != null){
				connection.query(sql , params, function (error, results) {
					if(results.length != 0){
						callback(results);
					}else{
						console.log(error);
						callback([]);
					}
				});
			}
			else{
				connection.query(sql , function (error, results) {
					if(results.length != 0){
						callback(results);
					}else{
						callback([]);
					}
				});
			}


			connection.end(function(err) {
				console.log('connection end!');
			});
		});
	},
	execute: function(sql, params, callback){
		getConnection(function(connection){
			if(params != null){
				connection.query(sql, params, function (error, status) {
					if(status){
						callback(true);
					}else{
						console.log(error);
						callback(false);
					}
				});
			}else{
				connection.query(sql, function (error, status) {
					if(status){
						callback(true);
					}else{
						callback(false);
					}
				});
			}
			connection.end(function(err) {
				console.log('connection end!');
			});
		});
	}

};
