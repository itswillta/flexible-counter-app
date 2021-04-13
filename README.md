# Flexible Counter App

This project demonstrates switching between implementations of a store (Vuex, Redux, Valtio, MobX) and UI libraries/frameworks (Vue, React and Svelte).

Please refer to the article for more details about the architecture: [A different approach to frontend architecture](https://dev.to/quochuytlbk/a-different-approach-to-frontend-architecture-38d4).

## Instructions

### Run the app

```bash
npm run dev
```

### Switching back and forth

- To replace an implementation of the store with another, go to **src/modules/counter/infrastructure/store/counter.store.ts** and comment/uncomment the equivalent sections of the code.

- To replace Vue with Svelte (or vice versa):

  - Go to **src/main.ts** and comment/uncomment the equivalent sections of the code.
  - Go to **vite.config.ts** and comment/uncomment the equivalent parts of the code.

- To switch to React, you'll have to rename:
  - **index-tsx.html** to **index.html**
  - **tsconfig-tsx.json** to **tsconfig.json**
  - **vite-tsx.config.ts** to **vite.config.ts**
