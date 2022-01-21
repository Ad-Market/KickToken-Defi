import { useCallback } from 'react'

import useKkt from './useKkt'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../kkt/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const kkt = useKkt()
  const masterChefContract = getMasterChefContract(kkt)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, kkt],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
