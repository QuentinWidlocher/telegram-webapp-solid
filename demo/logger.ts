import { createSignal } from 'solid-js'

export let [logs, setLogs] = createSignal<
  { level: 'error' | 'log' | 'warning'; message: string; date: Date }[]
>([])

export const logger = {
  log: (...args) => {
    setLogs((logs) => [
      ...logs,
      { level: 'log', message: args.join(' '), date: new Date() },
    ])
    console.log(...args)
  },
  warn: (...args) => {
    setLogs((logs) => [
      ...logs,
      { level: 'warning', message: args.join(' '), date: new Date() },
    ])
    console.warn(...args)
  },
  error: (...args) => {
    setLogs((logs) => [
      ...logs,
      { level: 'error', message: args.join(' '), date: new Date() },
    ])
    console.error(...args)
  },
}
