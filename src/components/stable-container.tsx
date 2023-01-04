import { JSX } from 'solid-js'

export type StableContainerProps = JSX.HTMLAttributes<HTMLElement> & {
  children: JSX.Element
}

export function StableContainer(props: StableContainerProps) {
  return (
    <main
      {...props}
      style={{
        'background-color': 'var(--tg-theme-bg-color)',
        color: 'var(--tg-theme-text-color)',
        height: 'var(--tg-viewport-stable-height)',
        overflow: 'hidden',
        width: '100vw',
        ...(typeof props.style == 'object' ? props.style : {}),
      }}
    >
      {props.children}
    </main>
  )
}
