import { theme } from 'antd'

const useThemeToken = () => {
  const { useToken } = theme
  const { token } = useToken()
  return { token }
}

export { useThemeToken }
