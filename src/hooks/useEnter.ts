import {useCallback} from 'react'

import useKkt from './useKkt'
import {useWallet} from 'use-wallet'

import {enter, getXKktStakingContract} from '../kkt/utils'

const useEnter = () => {
  const {account} = useWallet()
  const kkt = useKkt()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXKktStakingContract(kkt),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, kkt],
  )

  return {onEnter: handle}
}

export default useEnter
