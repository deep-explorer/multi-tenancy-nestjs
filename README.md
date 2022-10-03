# Multi-tenant

## Prepare for the project
* Set your computer's host name
* Run the command: `npm install`
## Start the project with the command bellow:
`npm run start:docker`


## Details
### GET data from DBs
* Send request to `GET http://localhost:3000/users`\
This will display the user's information in DB1
* Send request to `GET http://{your hostname}:3000/users`\
This will display the user's information in DB2

### POST data to DB1
* Send `POST` request to `http://localhost:3000/users` with the body content:\
`data:{
        "name": "Name1_for_DB1"
    }`\
`    content-type: "application/json"
`
- Check if the user is registered in DB1:\
`GET http://localhost:3000/users`
### POST data to DB2
* Send `POST` request to `http://{your hostname}:3000/users` with the body content:\
`data:{
        "name": "Name1_for_DB2"
    }`\
`    content-type: "application/json"
`
- Check if the user is registered in DB2:\
`GET http://{your hostname}:3000/users`
