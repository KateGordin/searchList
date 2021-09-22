# Autocomplete Challenge

 - This app was created with Vue 3 and Typescript
 - Implemented a flexible architecture using an Inversion of Control pattern
 - The right architecture allows us to have reactivity without Vuex, which makes our app more lightweight and easier for understanding and maintain
 - Specific logic was extracted into the services, and we can test them separately, outside the components
 - Search strings added to URL. After the page refresh, user will not lose the progress
 - Added unit and cypress tests


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```
