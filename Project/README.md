# TO DO App

This is a simple App for hosting, build using **LoopBack 4** for back-end, and **Next Js** for front-end.

### what is [LoopBack4](https://loopback.io/)
**LoopBack4** is a highly extensible, open-source Node.js and TypeScript framework based on Express, that enables you to quickly create APIs and microservices composed from backend systems such as databases and REST services "API".


### what is [NextJs](https://nextjs.org/)
**Next.js** is a special JavaScript framework to build a modern React applications with a server-side rendering. based on that main feature it makes our life much easier by reducing page loading time and by having page-based routing system, not to mention its positive impact on SEO ranking.

### How To Run
1. create DB and Add the url to your `.env` file in api folder 
     - create the database 
     - inside the api folder create a .env file 
     - add the PORT , name , connector ,and url as shown in the `.env.example` file.
     
     for example :
   ``` 
   PORT=4000
   name=todo
   connector=mysql
   url=mysql://<user>:<pass>@<localhost>:<port>/<dbName>
   ```
2. open terminal then change directory to `Project/api` folder to run this Command
    - npm i
    - npm run migrate
    - npm run pmstart
######    to run server in browser you can use the url provided in your terminal or  use this url

```
     http://127.0.0.1:4000/explorer/
```

3. open new terminal Tab then change directory to `client` folder to this Command
    - npm i
    - npm run build
    - npm pmstart
    
######    to run the client you can  open browser and use this url

```
    http://127.0.0.1:3000    
```
