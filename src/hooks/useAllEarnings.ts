import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../kkt/utils'
import useKkt from './useKkt'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const kkt = useKkt()
  const farms = getFarms(kkt)
  const masterChefContract = getMasterChefContract(kkt)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, kkt])

  useEffect(() => {
    if (account && masterChefContract && kkt) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, kkt])

  return balances
}

export default useAllEarnings
