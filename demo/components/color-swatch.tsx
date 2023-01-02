export function ColorSwatch() {
  return (
    <div class="flex flex-wrap gap-2 mt-5 justify-center">
      <div
        class="w-24 h-24 p-2 aspect-square rounded-xl shadow-lg grid place-content-center"
        style={{
          'background-color': 'var(--tg-theme-secondary-bg-color)',
        }}
      >
        <span class="text-xs text-white filter drop-shadow-outline">
          secondary bg color
        </span>
      </div>
      <div
        class="w-24 h-24 p-2 aspect-square rounded-xl shadow-lg grid place-content-center"
        style={{ 'background-color': 'var(--tg-theme-text-color)' }}
      >
        <span class="text-xs text-white filter drop-shadow-outline">
          text color
        </span>
      </div>
      <div
        class="w-24 h-24 p-2 aspect-square rounded-xl shadow-lg grid place-content-center"
        style={{ 'background-color': 'var(--tg-theme-hint-color)' }}
      >
        <span class="text-xs text-white filter drop-shadow-outline">
          hint color
        </span>
      </div>
      <div
        class="w-24 h-24 p-2 aspect-square rounded-xl shadow-lg grid place-content-center"
        style={{ 'background-color': 'var(--tg-theme-bg-color)' }}
      >
        <span class="text-xs text-white filter drop-shadow-outline">
          bg color
        </span>
      </div>
      <div
        class="w-24 h-24 p-2 aspect-square rounded-xl shadow-lg grid place-content-center"
        style={{ 'background-color': 'var(--tg-theme-link-color)' }}
      >
        <span class="text-xs text-white filter drop-shadow-outline">
          link color
        </span>
      </div>
      <div
        class="w-24 h-24 p-2 aspect-square rounded-xl shadow-lg grid place-content-center"
        style={{ 'background-color': 'var(--tg-theme-button-color)' }}
      >
        <span class="text-xs text-white filter drop-shadow-outline">
          button color
        </span>
      </div>
      <div
        class="w-24 h-24 p-2 aspect-square rounded-xl shadow-lg grid place-content-center"
        style={{
          'background-color': 'var(--tg-theme-button-text-color)',
        }}
      >
        <span class="text-xs text-white filter drop-shadow-outline">
          button text color
        </span>
      </div>
    </div>
  )
}
