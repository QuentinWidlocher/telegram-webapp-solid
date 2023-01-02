import { createVersionSignal } from '../../src'

export type Tab = 'buttons' | 'qr-code' | 'popup' | 'logs'

export function BottomNavigation(props: {
  selectedTab: Tab
  onSelectedTabChange: (tab: Tab) => void
}) {
  const { checkIfAvailable } = createVersionSignal()

  return (
    <div class="btm-nav text-primary">
      <button
        onClick={() => props.onSelectedTabChange('buttons')}
        classList={{ active: props.selectedTab == 'buttons' }}
        style={{ 'background-color': `hsl(var(--p)/0.2)` }}
      >
        <span class="btm-nav-label">Buttons</span>
      </button>
      {checkIfAvailable('showScanQrPopup') && (
        <button
          onClick={() => props.onSelectedTabChange('qr-code')}
          classList={{ active: props.selectedTab == 'qr-code' }}
          style={{ 'background-color': `hsl(var(--p)/0.2)` }}
        >
          <span class="btm-nav-label">QR Code</span>
        </button>
      )}
      {checkIfAvailable('showPopup') && (
        <button
          onClick={() => props.onSelectedTabChange('popup')}
          classList={{ active: props.selectedTab == 'popup' }}
          style={{ 'background-color': `hsl(var(--p)/0.2)` }}
        >
          <span class="btm-nav-label">Popups</span>
        </button>
      )}
      <button
        onClick={() => props.onSelectedTabChange('logs')}
        classList={{ active: props.selectedTab == 'logs' }}
        style={{ 'background-color': `hsl(var(--p)/0.2)` }}
      >
        <span class="btm-nav-label">Logs</span>
      </button>
    </div>
  )
}
