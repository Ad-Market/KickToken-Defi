import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../kkt/utils'
import useKkt from './useKkt'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const kkt = useKkt()
  const masterChefContract = getMasterChefContract(kkt)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, kkt])

  useEffect(() => {
    if (account && masterChefContract && kkt) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, kkt])

  return balance
}

export default useEarnings
