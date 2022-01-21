import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../kkt/utils'
import useKkt from './useKkt'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const kkt = useKkt()
  const masterChefContract = getMasterChefContract(kkt)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, kkt])

  useEffect(() => {
    if (account && kkt) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, kkt])

  return balance
}

export default useStakedBalance
