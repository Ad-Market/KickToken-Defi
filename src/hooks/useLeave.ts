import {useCallback} from 'react'

import useKkt from './useKkt'
import {useWallet} from 'use-wallet'

import {leave, getXKktStakingContract} from '../kkt/utils'

const useLeave = () => {
  const {account} = useWallet()
  const kkt = useKkt()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getXKktStakingContract(kkt),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, kkt],
  )

  return {onLeave: handle}
}

export default useLeave
