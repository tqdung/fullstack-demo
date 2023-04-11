import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { avatarAnatomy } from '@chakra-ui/anatomy'

const avatarHelper = createMultiStyleConfigHelpers(avatarAnatomy.keys)

const baseStyle = avatarHelper.definePartsStyle({
  container: {
    'div[role=img]': {
      fontFamily: 'Arial',
    },
  },
  excessLabel: {
    fontFamily: 'Arial',
    bg: 'transparent',
    color: 'primary.NavyBlue',
  },
})
const Avatar = avatarHelper.defineMultiStyleConfig({ baseStyle })

export default Avatar
