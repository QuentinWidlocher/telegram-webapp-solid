import { JSX } from 'solid-js'

export type StableContainerProps = JSX.HTMLAttributes<HTMLElement> & {
  children: JSX.Element
}

export function StableContainer(props: StableContainerProps) {
  return (
    <main
      style={{
        height: 'var(--tg-viewport-stable-height)',
        width: '100vw',
        overflow: 'hidden',
        'background-color': 'var(--tg-theme-bg-color)',
        color: 'var(--tg-theme-text-color)',
      }}
      {...props}
    >
      {props.children}
    </main>
  )
}
