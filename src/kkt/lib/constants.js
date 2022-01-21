import BigNumber from 'bignumber.js/bignumber'
import farm_1 from '../../assets/farms/bnb-kkt.png'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}



export const contractAddresses = {
  kkt: {
    56: '0xe5a46Bf898ce7583B612E5D168073ff773D7857e',
  },
  masterChef: {
    56: '0x84C1627348ae610C04257720f053B61a155a1fc9',
  },
  weth: {
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  },
  xKkt: {
    56: '0xA7Fd9467076E2fE8732C4245D89adc3294598A4F'
  }
}



export const supportedPools = [
   {
     pid: 0,
     lpAddresses: {
       56: '0x1E170e6260C66076925b96378246141555928583',
     },
     tokenAddresses: {
       56: '0x1E170e6260C66076925b96378246141555928583',
     },
     name: 'KKT MEME!',
     symbol: 'KKT-WBNB',
     tokenSymbol: 'KKT',
     icon: '👨🏻‍✈️',
   },
 
]
