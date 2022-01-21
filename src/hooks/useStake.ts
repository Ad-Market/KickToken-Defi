import { useCallback } from 'react'

import useKkt from './useKkt'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../kkt/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const kkt = useKkt()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(kkt),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, kkt],
  )

  return { onStake: handleStake }
}

export default useStake
