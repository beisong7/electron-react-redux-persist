# This is a React, Redux and Redux-Persist Boilerplate

Built with [Create React App](https://github.com/facebook/create-react-app).

## How to use

- Pull down and use

## Persisting Data on Redux (React)

- Ensure you have proper knowledge of How Redux Works irrespective of the approach you learnt

* From the [reducer/index.js](src/reducers/index.js)

  add the name of your reducer's key (which may have been combined) into the [store.js](src/store.js) whitelist

  Example, if the key in the export was auth

  ```js
  export default combineReducers({
    posts: postReducer,
    auth: authReducer
  });
  ```

  add auth to the whitelist array as seen below

  ```js
  whitelist: ["auth"];
  ```

  ## Start app

  ```bash
  npm run start
  ```

  ## Build app on electron

  ```bash
  npm run build
  ```

Enjoy...
