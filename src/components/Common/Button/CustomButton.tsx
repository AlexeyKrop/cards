import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type ButtonPropsType = DefaultButtonPropsType & {
  name?: string
  callBack?: () => void
}
export const CustomButton = (props: ButtonPropsType) => {
  const onClickBtnHandler = () => {
    props.callBack && props.callBack()
  }
  return (
    <button className={props.className} onClick={onClickBtnHandler}>
      {props.name}
    </button>
  )
}
