# TO DO App

is a simple App for hosting, build in LoopBack 4 as back-end, and Next Js As front-end.

### what is [LoopBack4](https://loopback.io/)
LoopBack4 is a highly extensible, open-source Node. js and TypeScript framework based on Express that enables you to quickly create APIs and microservices composed from backend systems such as databases and REST services "API".


### what is [NextJs](https://nextjs.org/)
Next.js is a special JavaScript framework to build a modern React applications with a server-side rendering. based on that main feature it makes our life much easier by reducing page loading time and by having page-based routing system, not to mention its positive impact on SEO ranking.

### How To Run
1. create DB and Add Link in .env
   ``` 
   url=postgres://username:password@localhost:port/database
   ```
2. open terminal then change directory to `api` folder to run this Command
    - npm i
    - npm run build
    - npm run migrate
    - npm start
    ```
    to check server you can  open browser then using this
    url http://127.0.0.1:4000/explorer/
    ```
3. open new terminal Tab then change directory to `client` folder to this Command
    - npm i
    - npm run build
    - npm start
    ```
    to check client you can  open browser then using this
    url http://127.0.0.1:3000
    ```
