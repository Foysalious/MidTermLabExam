var db = require('./db');

module.exports= {
	getAll : function(callback){
		var sql = "SELECT * FROM user";
		db.getResults(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},
  validate: function(user, callback){
		var sql ="SELECT * FROM user where username=? and password=?";

		db.getResults(sql, [user.username, user.password], function(results){
			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
