import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useKkt from '../../hooks/useKkt'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../kkt/utils'
import { getFarms } from '../../kkt/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const kkt = useKkt()
  const { account } = useWallet()

  const farms = getFarms(kkt)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
