// / <reference types="vite/client" />

declare const _isDev_: string

declare global {
  interface Window {
    ethereum: any
  }
}
