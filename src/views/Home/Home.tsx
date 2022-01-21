import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import ContractInfo from './components/ContractInfo'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={chef} height={150} style={{"marginLeft":"-40px"}} />}
        title=""
        subtitle=""
      />
      <div style={{"background":"#2a2a2a","padding":"10px","textAlign":"center","borderRadius":"5px"}}>
      <h1 style={{"color":"#fff"}}>KickToken is Ready For You..!!</h1>
      <h2 style={{"color":"#fff"}}>Stake Pancakeswap LP tokens to claim your very own KKT!</h2>
      </div>
      <br />
      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <StyledInfo>
        🏆<b>Pro Tip</b>: KKT-BNB LP token pool yields 0.7x more token
        rewards per block.
      </StyledInfo>
      <br />
      <Container>
        <ContractInfo/>
      </Container>
     
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="🔪 See the Farm" to="/farms" variant="secondary" />
        <br/><br/>
      </div>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.color.grey[200]};
  padding : 5px;
  border-radius : 5px;
  color : #fff;
  min-width: 360px;
  text-align:center;
`

export default Home
