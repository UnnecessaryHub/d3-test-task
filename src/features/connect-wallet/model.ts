import { createEffect, createEvent, createStore, sample } from 'effector'

import { notify } from '@kyvg/vue3-notification'

export const $isMetataskSupported = createStore<boolean>(false)

export const setIsMetataskSupported = createEvent<boolean>()

$isMetataskSupported.on(setIsMetataskSupported, (_, val) => val)

export const connectWalletFx = createEffect<boolean, string>(
  async (isSupported) => {
    if (!isSupported) {
      notify({
        title: 'MetaTask is not installed.',
        type: 'error'
      })
      return
    }

    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })

    const walletAddress = accounts[0]

    return walletAddress
  }
)

// eslint-disable-next-line effector/no-useless-methods
sample({
  clock: connectWalletFx.doneData,
  fn: (address: string) => {
    if (!address) {
      return
    }

    notify({
      title: 'MetaTask connected',
      text: `Your wallet address: ${address}`
    })
  }
})

sample({
  clock: connectWalletFx.fail,
  fn: () => {
    notify({
      title: 'An error occurred.',
      type: 'error'
    })
  }
})
