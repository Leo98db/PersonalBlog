var dbutil = require("./DBUtil.js");

function insertEveryDay( content, ctime, success ) {
    var insertSql = "insert into every_day (`content`, `ctime`) values(?,?)";

    var params = [content, ctime];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if(error == null) {
            success(result)
        }else {
            console.log(error)
        }
    });
    connection.end();
}

function queryEveryDay( success ) {
    var selectSql = "select * from every_day order by id desc limit 1";
    var params = [];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(selectSql, params, function (error, result) {
        if(error == null) {
            success(result)
        }else {
            console.log(error)
        }
    });
    connection.end();
}



module.exports.insertEveryDay = insertEveryDay;
module.exports.queryEveryDay = queryEveryDay;