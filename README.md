# Telegram Webapp for SolidJs

A SolidJs wrapper for creating Telegram Webapp.

## Usage

Import this package in your app (Javascript or Typescript)

```bash
npm i --save telegram-webapp-solid
yarn add telegram-webapp-solid
pnpm add telegram-webapp-solid
```

Then you can use ready-made components or signals.

Components are truly declarative ways of using the API, signals are a more procedural approach and should be use to get more control over the API.

- [Telegram Webapp for SolidJs](#telegram-webapp-for-solidjs)
  - [Usage](#usage)
    - [Components](#components)
      - [AlertButton](#alertbutton)
      - [Alert](#alert)
      - [BackButton](#backbutton)
      - [ConfirmButton](#confirmbutton)
      - [Confirm](#confirm)
      - [HapticButton](#hapticbutton)
      - [HapticInput](#hapticinput)
      - [MainButton](#mainbutton)
      - [PopupButton](#popupbutton)
      - [Popup](#popup)
      - [QRCodeButton](#qrcodebutton)
      - [StableContainer](#stablecontainer)
    - [Signals](#signals)
      - [createBackButtonSignal](#createbackbuttonsignal)
      - [createDataSignal](#createdatasignal)
      - [createExpandSignal](#createexpandsignal)
      - [createHapticImpactSignal](#createhapticimpactsignal)
      - [createHapticSelectionSignal](#createhapticselectionsignal)
      - [createLifecycleSignal](#createlifecyclesignal)
      - [createMainButtonSignal](#createmainbuttonsignal)
      - [createOpenSignal](#createopensignal)
      - [createPromptQrCodeScanSignal](#createpromptqrcodescansignal)
      - [createThemeSignal](#createthemesignal)
      - [createUserSignal](#createusersignal)
      - [createVersionSignal](#createversionsignal)
      - [createViewportHeightSignal](#createviewportheightsignal)
      - [createViewportStableHeightSignal](#createviewportstableheightsignal)
  - [Demo](#demo)

### Components

Components are a declarative way to use Telegram Webapp capabilities.

#### AlertButton

This is a regular button that spawns an alert when clicked.

See : [Alert](#alert)

#### Alert

When this component is rendered, shows an alert to the user.  
An alert is just a message with a "close" button.

#### BackButton

When this component is rendered, the app's exit button turns into a back button, where you can provide a `onClick` callback

Also available as a signal with `createBackButtonSignal`

#### ConfirmButton

This is a regular button that spawns a confirm popup when clicked.

See : [Confirm](#confirm)

#### Confirm

When this component is rendered, shows a confirm popup to the user.  
A confirm popup is a message with a "OK" and a "cancel" button. When the user chooses "OK", the popup returns `true`, when the user chooses "cancel" or click away it returns `false`

#### HapticButton

This is a standard `<button/>` except it vibrates when touched on mobile (you can pass a `hapticForce` prop to change the
intensity)

#### HapticInput

This is a standard `<input/>` except it vibrates when focused on mobile (it uses a specific haptic force for selections)

#### MainButton

When this component is rendered, the app's main button appears on the bottom of the screen. You can provide a `text` prop, an `active` boolean prop, a `progressVisible` boolean prop, a `hapticForce` setting and a `onClick` callback

Also available as a signal with `createMainButtonSignal`

#### PopupButton

This is a regular button that spawns a popup when clicked.

See : [Popup](#popup)

#### Popup

When this component is rendered, shows a popup to the user.  
A popup is a message with 1-3 buttons. When the user chooses a button, the popup returns the id of the pressed button.

Buttons can be one of :

- `default`, a button with the default style,
- `ok`, a button with the localized text “OK”,
- `close`, a button with the localized text “Close”,
- `cancel`, a button with the localized text “Cancel”,
- `destructive`, a button with a style that indicates a destructive action (e.g. “Remove”, “Delete”, etc.).

#### QRCodeButton

When this component is rendered, brings up a QR code scanner on the screen.  
You can provide a callback to get back the scanned text.

#### StableContainer

A standard `<main/>` except it uses css variables provided by telegram to render only inside the space of the web app.

### Signals

Signals are not always true reactive signals, but they provide a procedural approach to the Telegram Webapp API.

#### createBackButtonSignal

Returns an object to see and change the visibility of the back button

#### createDataSignal

Returns a `[initData, sendData]` tuple that are only wrapped around the API

#### createExpandSignal

Returns a `[expanded, expand]` tuple where `expanded` is a boolean indicating if the app is expanded and `expand` is a function
that expands the app

#### createHapticImpactSignal

Takes a `hapticForce` prop and returns a function that vibrates the device with the given intensity

#### createHapticSelectionSignal

Returns a function that vibrates the device with a specific intensity made for selections

#### createLifecycleSignal

Returns a `{ ready, close }` object that are only wrapped around the API

#### createMainButtonSignal

Returns an object to see and change the visibility of the main button.  
You can also see/change the text, the progress indicator and the "active" state

#### createOpenSignal

Returns an object to open link, Telegram links and invoices (simple wrappers around the API).
You can also use `onInvoiceClosed` as a shorthand to the `invoiceClosed` event

#### createPromptQrCodeScanSignal

Returns a function that opens the QR Code scanner and returns a promise with the scanned text

#### createThemeSignal

Returns an object with a `theme` key, which is a reactive theme object and also `setHeaderColor()` and `setBackgroundColor()`.

#### createUserSignal

Returns the user object from the Telegram API. (Warning : it uses initDataUnsafe for the moment)

#### createVersionSignal

Returns an object with a `version` key and a `isVersionAtLeast` function.

#### createViewportHeightSignal

Returns a signal that gives the height of the viewport as it changes

#### createViewportStableHeightSignal

Returns a signal that gives the height of the viewport as it finish changing.

## Demo

You can check the demo by looking at the [demo](./demo) folder.

You can also open the [live demo in telegram](https://t.me/TgWebappSolidDemoBot)
