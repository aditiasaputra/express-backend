# Blueprint an app

This is blueprint an app Express.js, Mysql, Sequelize and Typescript.

### How to use it

- Open your command line interface
- `cd <app-name>`
- Enter `npm install`
- Copy `.env.example` file to `.env` and fill `DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME` and `DB_PASSWORD`
- Create database
- Enter `npm run sequelize:model:generate -- --name <table> --attributes <field>:<type> <--underscored [OPTIONAL]>` to generate model
- Enter `npm run sequelize:db:migrate` for migrate your model to database
- Enter `npm run dev` for start app in development
- Enter `npm run start` for start app in production

##### If your already to online app, change `NODE_ENV` to production
