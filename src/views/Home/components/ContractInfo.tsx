// import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
// import CountUp from 'react-countup'
import styled from 'styled-components'
// import { useWallet } from 'use-wallet'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
// import Label from '../../../components/Label'
import Spacer from '../../../components/Spacer'


const ContractInfo: React.FC = () => {
  return (
    <StyledWrapper>
      <Card>
        <CardContent>
          <StyledBalances>
            <StyledBalance>
                <div style={{"color":"white", "textAlign":"center", "width":"-webkit-fill-available"}}>
                    <h2 style={{ "textAlign":"center"}}>Kkt Stats</h2>
                    <p>Total KKT Supply: 60, 000, 000</p>
                    <p>Total KKT Burned: 0</p>
                </div>
            </StyledBalance>
          </StyledBalances>
        </CardContent>
      </Card>
      <Spacer />

      <Card>
        <CardContent>
          <StyledBalance>
              <div style={{ "color":"white", "textAlign":"center", "width":"-webkit-fill-available"}}>
              <h2 style={{ "textAlign":"center"}}>Total Value Locked (TVL)</h2>
              <p>$0</p>
              <p>All LPS</p>
              </div>
          </StyledBalance>
        </CardContent>
      </Card>
    </StyledWrapper>
  )
}

const Footnote = styled.div`
  font-size: 14px;
  padding: 8px 20px;
  color: ${(props) => props.theme.color.grey[400]};
  border-top: solid 1px ${(props) => props.theme.color.grey[300]};
`
const FootnoteValue = styled.div`
  font-family: 'Roboto Mono', monospace;
  float: right;
`

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
  }
`

const StyledBalances = styled.div`
  display: flex;
`

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

export default ContractInfo
