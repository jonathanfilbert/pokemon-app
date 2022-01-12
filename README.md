<h1 align="center">
  <p align="center">Pokepedia | Mobile first Pokemon App</p>
  <a align="center" href="https://pokepedia-app.vercel.app"><img align="center" src="https://i.ibb.co/3dLSpJz/Screen-Shot-2022-01-11-at-18-07-52.png" alt="Docusaurus"></a>
</h1>

[![codecov](https://codecov.io/gh/jonathanfilbert/pokemon-app/branch/main/graph/badge.svg?token=9BBYEVHDGG)](https://codecov.io/gh/jonathanfilbert/pokemon-app)

![Coverage Branch](/badges/badge-branches.svg)

![Coverage Function](/badges/badge-functions.svg)

![Coverage lines](/badges/badge-lines.svg)

![Coverage Statements](/badges/badge-statements.svg)

# Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Tech Stacks](#tech-stacks)
  - [Programming Paradigm](#programming-paradigm)
    - [React and Hooks](#react-and-hooks)
  - [Language:](#language-)
    - [Typescript](#typescript)
  - [Framework](#framework)
    - [Next.JS](#nextjs)
  - [State Management](#state-management)
    - [React Context-Provider Pattern](#react-context-provider-pattern)
  - [CSS in JS](#css-in-js)
    - [Emotion](#emotion)
  - [Component Library](#component-library)
    - [Chakra UI](#chakra-ui)
  - [Data Fetching](#data-fetching)
    - [Apollo and GraphQL](#apollo-and-graphql)
  - [Testing Suite](#testing-suite)
    - [React Testing Library & JEST](#react-testing-library---jest)
  - [Continuous Integration](#continuous-integration)
    - [Github Actions](#github-actions)
- [Features](#features)
  - [1. View All Pokemon](#1-view-all-pokemon)
  - [2. View detail of a Pokemon](#2-view-detail-of-a-pokemon)
  - [3. Catch Pokemon!](#3-catch-pokemon-)
  - [4. Owned Pokemon](#4-owned-pokemon)

# Description

Pokepedia is a mobile-first web application that lets you view pokemons, catch and rename, and collect all the captured pokemons. Pokepedia is equipped with PWA (Progressive Web Apps) feature so you can install it to your phone directly from the browser.

# Installation

1. Git clone the app, and `cd` into the directory
2. Install dependencies using NPM or Yarn

```
npm install
```

```
yarn
```

3. Run the app in development using `npm run dev`

4. **Optional**: PWA is disabled on development to minimize console logs, to run the app in production and enable service worker and PWA, run:

```
npm run serve
```

5. Both the production and development version should start locally in http://localhost:3000.

# Folder Structure

Although heavily unopiniated, the foldering convention in the React-SPA space is highly saturated. There's no right or wrong, foldering structure depends on the scale and structure of the team. This project adopts the [**Domain - Driven - Development**](https://dev.to/stevescruz/domain-driven-design-ddd-file-structure-4pja) convention. Where everything besides `pages` are moved to an `src` folder (although Next.JS [officially supports](https://nextjs.org/docs/advanced-features/src-directory) putting the pages in `src`, this project decides to keep it as it is because having the `pages` directory not in the root apparently cause several styling breaks, and also for the fast development).

The `src` is then seperated into `domains`, where **each domain corresponds to a specific business units**. In this project, we have 2 business units: `pokemon` and `shared`.`Pokemon` is a folder containing folders relating to Pokemon on our app. This includes `components`, `containers`, and `utils`. `shared` is a folder containing folders that can be reused by other business units. This includes `apollo` for our Apollo client, `components` for any shared components: Layout, Header, etc and `utils` for utility functions.

This development patterns benefits the scaling of our application in both **horizontal** and **vertical** axis. Where if we need to do horizontal scaling (e.g. add a new business units), then the development of other business units won't be affected. Vertical scaling (adding new features to a specific business unit) can also be done seamlessly because the structure already supports and any unit tests or feature development can be done seperate from other business units.

```
├── pages
│   ├── _app.js
│   ├── _document.tsx
│   ├── index.tsx
│   └── pokemon
│       ├── [name].tsx
│       └── owned.tsx
├── public
├── src
│   ├── pokemon
│   │   ├── components
│   │   ├── containers
│   │   ├── context
│   │   └── provider
│   └── shared
│       ├── apollo
│       ├── components
│       └── utils
└── tsconfig.json
```

# Tech Stacks

The stacks used in this project are front-end heavy because this project does not include the backend. The backend is using the [PokeAPI GraphQL Endpoint by Mazipan](https://github.com/mazipan/graphql-pokeapi).

## Programming Paradigm

### React and Hooks

Although [heavility debated](https://reactjs.org/docs/hooks-intro.html#motivation), functional programming is being embraced by the React community upon the release of React Hooks. The addition of hooks enable developers to fully embrace the functional component pattern and not caught up with class-based components constraints such as the binding of event handlers. This app uses functional component as well as hooks in every part. Several hooks, such as `useEffect` is used to manage React lifecycle, `useState` to create and update states, and `useCallback` to make sure functions don't change unless the dependencies change. Moreover, this app also uses 3rd party hooks offered by libraries used in this app, such as `useLazyQuery`, a hook by Apollo Client that returns a function to fetch queries on demand, and `useToast`, a hook by Chakra that returns a variable that can call the toast component.

## Language:

### Typescript

Typescript is used instead of Javascript because of the type safe capabilities and **autocomplete** that makes the development process faster. Also, since Next.JS supports Typescript out of the box, why not use it? Moreover, **TSDoc** is used to give documentations on the functions in this app. This is done so future maintainers or enthusiast can read and understand the code better.

## Framework

### Next.JS

NextJS is used primarily because of its wide range of rendering method and familiarity since it's a React-based framework. Unlike [other frameworks](https://www.gatsbyjs.com/docs/why-gatsby-uses-graphql/) which are very opiniated on things like data-sourcing, NextJS lets developers choose the type of data fetching which is more convenient. Moreover, Next.JS has a wide array of rendering method which could increase the arsenal of engineers, some of them are **Static Generation** (used in owned Pokemon page, so the page is generated at build time), **Server-side Rendering** (used in the initial render of all pokemon page, which bypasses the 'loading' state), and [**Incremental Static Regeneration**](https://vercel.com/docs/concepts/next.js/incremental-static-regeneration) (ISR), which enables developers to build on static generation but can benefit from auto content revalidation (not used on this project).

## State Management

### React Context-Provider Pattern

Since React 16, the React team has finally released the official way of manging state, while beforehand, a lot of opinionated frameworks have tried to tackle this issue with approaches such as [Observables](https://react-rxjs.org/) or [Stores](https://react-redux.js.org/). **Context** gives an abstract and relatively easy to use API to manage and implement our states to be shared across our application. This app uses context to provide a single place to manage shared informations (caught pokemons, and functions to modify them) and through the `provider` lets other parts of the app consume and modify them. Moreover, `localstorage` is used alongside `Context-Provider` to persist the information of caught pokemons so it persists upon loading.

## CSS in JS

### Emotion

Another hugely opinionated field of web development, the CSS-in-JS has evolved from writing stylesheets [inline with the HTML](https://www.nomensa.com/blog/css-inline-styles-and-why-they-are-considered-harmful-accessibility), to using libraries and solution such as [writing CSS in Javascript](https://css-tricks.com/the-differing-perspectives-on-css-in-js/). The usage of writing CSS in JS has a huge advantage when it comes to the speed of development and scalability, especially when features are constantly being shipped everyday, and the needs to alter and use styles dynamically has increased exponentially. However, the amount of writing CSS inline in a javascript file has made teams confused over syntaxes and minimum readability. **Emotion** gives a powerful API such as the `styled` API to adopt the [styled-component's wrapped styling pattern](https://www.joshwcomeau.com/css/styled-components/), which in turn, gives developers the readability, maintainability, and flexibility of `emotion` such as the `css` props. This app uses Emotion heavily to create wrapper styles for every component and containers, you can find all the wrapper styles on `styles.tsx` on every domain folder.

## Component Library

### Chakra UI

Although **some components and UI parts are created from the ground up** to match the overall design and UI/UX, this app utilizes **Chakra UI** for several components (Modals, Button, Toast) to provide a **fast iteration for the development process**. Moreover, with `emotion` built-in, Chakra UI is paired nicely with the css-in-js of choice for this app. In the future, these components should definitely be developed in-house because of [**ChakraUI's runtime tradeoffs for its API's ease of use**](https://chakra-ui.com/docs/comparison#the-runtime-trade-off-%EF%B8%8F).

## Data Fetching

### Apollo and GraphQL

If in the microservice world, gRPC disrupts the world by enabling microservices within the backend communicate seamlessly, then in the frontend world, **GraphQL** makes applications easier to consume data from endpoints. The downside of REST lies in its resource transferring method where specific data typically can only be consumed in a specific endpoint adress. This usually leads to the creation of too many endpoints e.g. `${BACKEND}/pokemons/` and `${BACKEND}/pokemon/${id}`. This is answered with GraphQL in a very elegant manner, where information hierarchy is represented as graphs and each point of information is a node, where we can query any points we want from **a single endpoint**. A good data transfer method requires a good data transfer client, and this is where **Apollo** comes in. Apollo provides an easy to use client to query graphql from our NextJS app, moreover Apollo does a lot out of the box, including **automating query caching** using `InMemoryCache()`, **client provider** using `ApolloProvider`to that puts our Apollo client inside the context to provide access anywhere inside our app, and providing **hooks** such as`useLazyQuery` to let us query graphql on demand.

## Testing Suite

### React Testing Library & JEST

What better way to test React, other than using a test suite created by the teams behind React? **React Testing Library** features a lot of easy to use API that can be used to test react UIs, `render()` and `waitFor()` can be used to render react components to the testing environment relatively easy. A great suite requires an amazing test runner, this is where **JEST** comes in. Created by the same company which creates React Testing Library, JEST features an array of capabilities you'd expect from a test runner. Some of the JEST capabilities used in this project are: asynchronous testing with `test('', async () => {})` which makes us able to fetch data and grab items asynchronously, the wondrously amazing JEST matchers: `expect()` and `toBe()` are used to assert values during tests, and coverage output to display test coverages on statements and functions. Moreover, **Apollo** also provides an easy to use component to provide our graphql client in the testing environment using `MockedProvider` so we can do mock queries relatively easy.

## Continuous Integration

### Github Actions

**Github Actions** make developers able to write a whole pipeline command in literally minutes. This project uses a relatively simple github workflow that runs test on every push. With the Github pipeline features, developers can build complex pipelines relatively easy, workflow piepleines such as not able to merge if a test fails can be done with ease via github workflows.

# Features

## 1. View All Pokemon

This page lets you view all pokemon in existence, just scroll to load more!
![View All Pokemon Page](https://i.ibb.co/2hFxzs5/pokepedia-app-vercel-app.png)

## 2. View detail of a Pokemon

This page lets you view the detail of a selected Pokemon, including its types, moves, sprites, and a custom gradient matching the types of the Pokemon!
![View Pokemon Detail](https://i.ibb.co/rf5P2Y8/pokepedia-app-vercel-app-1.png)

## 3. Catch Pokemon!

At the bottom right of the detail page, you can choose to catch the Pokemon! The probability is 50:50, once you caught the Pokemon, you can rename the Pokemon. Remember: you cannot rename the same Pokemon with the same nickname.
![Catch Pokemon Success](https://i.ibb.co/F3f6Br0/pokepedia-app-vercel-app-2.png)
![Catch Pokemon Fail](https://i.ibb.co/5rNhyM3/pokepedia-app-vercel-app-3.png)
![Same Pokemon with same name](https://i.ibb.co/Zmk5gZW/pokepedia-app-vercel-app-5.png)

## 4. Owned Pokemon

After catching some Pokemon, you can browse through all the Pokemons you've caught in this page. You can also release Pokemon, bye bye!
![View Owned Pokemon](https://i.ibb.co/9pmNQqD/pokepedia-app-vercel-app-4.png)
![Releasing Pokemon](https://i.ibb.co/wr9987C/pokepedia-app-vercel-app-6.png)
