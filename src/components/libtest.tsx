import { onCleanup, onMount } from 'solid-js'

export function LibTest(props: any) {
  onMount(() => {
    console.log('LibTest mounted')
  })

  onCleanup(() => {
    console.log('LibTest unmounted')
  })

  return <span>lib test</span>
}
