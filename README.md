# TODO App

```
npm install
git checkout -b <branchname>
npm run dev
```

See the breathtaking designs [here](http://localhost:3000/designs/)

## Notes

A few notes to keep you out of trouble:
- When running knex, run `npm run knex <command>`, e.g. `npm run knex migrate:latest` rather than using `npx`
- When running webpack, run `npm run webpack <extra commands>`, e.g. `npm run webpack`, rather than using `npx`

## How to start

Here's a list of steps in case they are useful. You can build in any order you like though ;)

1.  Design a database to store a list of tasks, e.g. task details, priority, completed yes/no
1.  Build the migrations and seed data
1.  Build an API to list, add, update and delete
1.  Test your API with Postman/Insomnia
1.  Build React Components from static html
1.  Design Redux Global State (think of it like a JS object)
1.  Build Redux Reducers (the properties or keys of your state design are reducers, the values are hard-code static data as initialState)
1.  Build API Client in the front end
1.  Build Thunk Actions to get task from the API
1.  Build Redux Actions to save task data from the API (remove hard-code initialState)
