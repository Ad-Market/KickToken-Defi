import { useCallback } from 'react'

import useKkt from './useKkt'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../kkt/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const kkt = useKkt()
  const masterChefContract = getMasterChefContract(kkt)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, kkt])

  return { onReward: handleReward }
}

export default useReward
