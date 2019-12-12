var MongoClient = require('mongodb').MongoClient;
var datos=[];
// Connect to the db
MongoClient.connect("mongodb://10.6.129.235:27017/tienda", { useUnifiedTopology: true } , function (err, db) {
    
    db.collection('users', function (err, collection) {
        
     //   collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
      //  collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
       // collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
        db.collection('users').find({}).toArray(function(err, docs) {

    // Print the documents returned
    docs.forEach(function(doc) {
        console.log(doc);
	datos.push(doc); 
	//console.log(JSON.stringify(datos[0]));
    }); 

        db.collection('users').count(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);

	db.close();
        });
    });
                
});


});




const http = require('http');

// Start the server on port 3000
const express = require("express");
const app = express();
app.listen(8080, () => {
console.log("El servidor está inicializado en el puerto 3000");
});

app.get('/', function (req, res) {

res.send(JSON.stringify(datos));

});
