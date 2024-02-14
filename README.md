Installed Packages:

npm i --save express\
npm i --save-dev nodemon\
npm i colors\
npm i dotenv --save-dev\
npm i morgan

❗Add the .env file to gitignore❗

package.json setup modification in ES Modules:

{\
 "name": "express-starting-server",\
 "version": "1.0.0",\
 "description": "",\
 "main": "app.js",\
 "type": "module"\ 👈 ❗This should be added❗
"scripts": {\
 "start": "nodemon app.js"\
 },\
 "keywords": [],\
 "author": "",\
 "license": "ISC",\
 "dependencies": {\
 "colors": "^1.4.0",\
 "express": "^4.18.2",\
 "morgan": "^1.10.0"\
 },\
 "devDependencies": {\
 "dotenv": "^16.4.4",\
 "nodemon": "^3.0.3"\
 }\
}
