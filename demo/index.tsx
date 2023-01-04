/* @refresh reload */
import './index.css'
import { render } from 'solid-js/web'

import App from './App'
import { TelegramAPIProvider } from '../src/context/context'

render(
  () => (
    <TelegramAPIProvider>
      <App />
    </TelegramAPIProvider>
  ),
  document.getElementById('root') as HTMLElement,
)
