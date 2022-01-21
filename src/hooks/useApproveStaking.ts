import {useCallback} from 'react'

import useKkt from './useKkt'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getKktContract,
  getXKktStakingContract
} from '../kkt/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const kkt = useKkt()
  const lpContract = getKktContract(kkt)
  const contract = getXKktStakingContract(kkt)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking
