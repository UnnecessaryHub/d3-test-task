import { createEffect, createEvent, createStore } from 'effector'

export const $isMetataskSupported = createStore<boolean>(false)

export const $walletAddress = createStore<boolean>(false)

export const setIsMetataskSupported = createEvent<boolean>()

$isMetataskSupported.on(setIsMetataskSupported, (_, val) => val)

export const connectWalletFx = createEffect<boolean, string>(
  async (isSupported) => {
    if (!isSupported) {
      console.log('connectWallet: not supported.')
      return
    }

    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })

    const walletAddress = accounts[0]

    return walletAddress
  }
)

$walletAddress.on(connectWalletFx.doneData, (_, val) => val)
