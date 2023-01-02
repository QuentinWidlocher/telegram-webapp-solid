import { JSX } from 'solid-js/jsx-runtime'

export function Collapse(props: { title: string; children?: JSX.Element }) {
  return (
    <div class="collapse collapse-arrow shadow-sm bg-base-200 rounded-box">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">{props.title}</div>
      <div class="collapse-content">{props.children ?? null}</div>
    </div>
  )
}
