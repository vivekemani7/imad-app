var express = require('express');//importing 3 software packages
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var files = {
'file_one' : {
    title:'file_one|vivek',
    heading:'file_one',
    date:'aug 26 2017',
    content:`
              <p>
                this is frist time to edit this file.this is frist time to edit this file.
                this is frist time to edit this file.this is frist time to edit this file.
                this is frist time to edit this file.this is frist time to edit this file.
            </p>
            <p>
                just work buddy i beg you
            </p>`
            
},
'file_two' : {
    title:'file_two|vivek',
    heading:'file_one',
    date:'aug 25 2017',
    content:`
              <p>
                this is second time to edit this file.this is frist time to edit this file.
                this is frist time to edit this file.this is frist time to edit this file.
                this is frist time to edit this file.this is frist time to edit this file.
            </p>
            <p>
                just work buddy i beg you twice
            </p>`
}
};
function createtemplate(data){
    var title = data.title; 
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

var htmltemplate=`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
        <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
              ${date}
            </div>
            <div>
            ${content}
            </div>
        </div>
    </body>
</html>

`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:filename', function (req, res) {
    var filename = req.params.filename;
  res.send(createtemplate(files[filename])) ;
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
