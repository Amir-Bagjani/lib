import clsx from 'clsx'
import style from './style.module.css'

import { ButtonProps } from './button.type'
import { FC } from 'react'

const Button: FC<ButtonProps> = (props) => {
  const { color, className, ...restProps } = props

  const rootClassNAme = clsx(style.btn, className, color && style[`__${color}`])

  return (
    <button
      className={rootClassNAme}
      {...restProps}
    />
  )
}

export default Button
