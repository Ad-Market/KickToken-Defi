import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Kkt } from '../../kkt'

export interface KktContext {
  kkt?: typeof Kkt
}

export const Context = createContext<KktContext>({
  kkt: undefined,
})

declare global {
  interface Window {
    kktsauce: any
  }
}

const KktProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [kkt, setKkt] = useState<any>()

  // @ts-ignore
  window.kkt = kkt
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const kktLib = new Kkt(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setKkt(kktLib)
      window.kktsauce = kktLib
    }
  }, [ethereum])

  return <Context.Provider value={{ kkt }}>{children}</Context.Provider>
}

export default KktProvider
