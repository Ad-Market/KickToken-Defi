import { useContext } from 'react'
import { Context } from '../contexts/KktProvider'

const useKkt = () => {
  const { kkt } = useContext(Context)
  return kkt
}

export default useKkt
