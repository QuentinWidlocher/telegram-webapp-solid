import { For } from 'solid-js'
import { logs, setLogs } from './logger'

export function LogsPage() {
  return (
    <div>
      <button
        onClick={() => setLogs([])}
        class="btn btn-primary btn-outline mb-2 w-full"
      >
        Clear logs
      </button>
      <div class="overflow-y-auto">
        <ol class="gap-2 flex flex-col-reverse">
          <For each={logs()}>
            {({ level, message, date }) => (
              <li class={`alert alert-${level}`}>
                <div class="w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    {level == 'error' && (
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    )}
                    {level == 'log' && (
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    )}
                    {level == 'warning' && (
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    )}
                  </svg>
                  <div>
                    <span>{message}</span>
                    <br />
                    <span class="text-xs">{date.toLocaleString()}</span>
                  </div>
                </div>
              </li>
            )}
          </For>
        </ol>
      </div>
    </div>
  )
}
