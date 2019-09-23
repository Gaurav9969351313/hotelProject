var request = require("request");

var options = {
    method: 'POST',
    url: 'http://localhost:3000/users',
    headers:
    {
        'Postman-Token': '17a6db96-5d63-478a-af5f-bd092df96394',
        'cache-control': 'no-cache',
        'Content-Type': 'application/json'
    },
    body:
    {
        firstName: 'sss',
        lastName: 'sss',
        email: 'sss@sss.com',
        password: 'sss',
        permissionLevel: 2048
    },
    json: true
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});


var options = { method: 'POST',
  url: 'http://localhost:3000/users',
  headers: 
   { 'Postman-Token': 'ca10f0d9-e7ab-45d0-b810-d38eab66c123',
     'cache-control': 'no-cache',
     'Content-Type': 'application/json' },
  body: 
   { "firstName": "sss2",
     "lastName": "sss2",
     "email": "sss2@sss.com",
     "password": "sss2",
     "permissionLevel": 4 },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''//

var options = {
    method: 'POST',
    url: 'http://localhost:3000/auth',
    headers:
    {
        'Postman-Token': 'ec33f4ba-07d0-45e4-bd59-547e931578e7',
        'cache-control': 'no-cache',
        'Content-Type': 'application/json'
    },
    body: { email: 'sss@sss.com', password: 'sss' },
    json: true
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});
