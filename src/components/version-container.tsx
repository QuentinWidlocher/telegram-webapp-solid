import { ParentProps } from 'solid-js'
import { APIVersion, checkIfAvailable, isVersionAtLeast } from '../api/version'
import { WebApp } from '../types/telegram-webapp'

export function VersionContainer(
  props: ParentProps<
    { ifVersionAtLeast: APIVersion } | { ifAvailable: keyof WebApp }
  >,
) {
  if ('ifVersionAtLeast' in props) {
    if (isVersionAtLeast(props.ifVersionAtLeast)) {
      return <>{props.children}</>
    } else {
      return null
    }
  } else if ('ifAvailable' in props) {
    if (checkIfAvailable(props.ifAvailable)) {
      return <>{props.children}</>
    } else {
      return null
    }
  } else {
    return null
  }
}
