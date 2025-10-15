import clsx from 'clsx'
import style from './style.module.css'

import { TypographyProps } from './typography.type'
import { FC } from 'react'

const Typography: FC<TypographyProps> = (props) => {
  const { color, className, ...restProps } = props

  const rootClassName = clsx(style.main, className, color && style[`__${color}`])

  return (
   <p {...restProps} className={rootClassName}/>
  )
}

export default Typography
