import styled from 'styled-components'
import { typography, space, color, compose } from 'styled-system'

export const BoxCompose = compose(
    typography, space, color,
)

export const Box = styled.div`
  ${BoxCompose}
`