# Telegram Webapp for SolidJs

A SolidJs wrapper for creating Telegram Webapp.

## Usage

Import this package in your app (Javascript or Typescript)

```bash
npm i --save telegram-webapp-solid
yarn add telegram-webapp-solid
pnpm i telegram-webapp-solid
```

Then you can use ready-made components or signals.

### Components

#### BackButton

When this component is rendered, the app's exit button turns into a back button, where you can provide a `onClick` callback

#### HapticButton

This is a standard `<button/>` except it vibrates when touched on mobile (you can pass a `hapticForce` prop to change the
intensity)

#### MainButton

When this component is rendered, the app's main button appears on the bottom of the screen. You can provide a `text` prop and a
`onClick` callback

#### StableContainer

A standard `<main/>` except it uses css variables provided by telegram to render only inside the space of the web app.

### Signals

#### createExpandSignal

Returns a tuple `[expanded, expand]` where `expanded` is a boolean indicating if the app is expanded and `expand` is a function
that expands the app

#### createHapticImpactSignal

Takes a `hapticForce` prop and returns a function that vibrates the device with the given intensity

- createThemeSignal

#### createUserSignal

Returns the user object from the Telegram API. (Warning : it uses initDataUnsafe for the moment)

#### createViewportHeightSignal

Returns a signal that gives the height of the viewport as it changes

#### createViewportStableHeightSignal

Returns a signal that gives the height of the viewport as it finish changing.

## Demo

You can check the demo by looking at the [demo](./demo) folder.

You can also open the [live demo in telegram](https://t.me/TgWebappSolidDemoBot)
