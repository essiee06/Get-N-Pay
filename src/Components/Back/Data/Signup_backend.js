// import the mysql module
const mysql = require('mysql');

// create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: '',
  database: 'getnpay'
});

// connect to the database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database: ' + error.stack);
    return;
  }
  console.log('Connected to the database with ID ' + connection.threadId);
});

// handle form submission
$('#signup-form').on('submit', (event) => {
  event.preventDefault(); // prevent form from submitting normally

  // get form values
  const first_name = $('#firstname').val();
  const last_name = $('#lastname').val();
  const email = $('#email').val();
  //const address = $('#email').val();
  const phone_number = $('#phonenum').val();
  const password = $('#password').val();
  const confirm_password = $('#confirmpass').val();

  // insert new user record into the database
  const query = `INSERT INTO users (first_name, last_name, email, phone_number, password, confirm_password) 
                            VALUES ('${first_name}', '${last_name}', '${email}', '${phone_number}','${password}','${confirm_password}')`;
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error('Error executing query: ' + error.stack);
      return;
    }
    console.log('New user inserted with ID ' + results.insertId);
  });

  // clear form fields
  $('#firstname').val('');
  $('#lastname').val('');
  $('#email').val('');
  $('#phonenum').val('');
  $('#email').val('');
  $('#password').val('');
  $('#confirmpass').val('');
});

// close the database connection when the script exits
process.on('exit', () => {
  connection.end();
});