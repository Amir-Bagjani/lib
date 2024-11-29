import clsx from 'clsx'
import style from './style.module.css'

import { ButtonProps } from './Button.type'

const Button = (props: ButtonProps) => {
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
