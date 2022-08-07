import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: string[]
  onChangeOption?: (option: string) => void

}

export const CustomSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const mappedOptions: any = options?.map((o, index) => {
    return <option key={index}>{o}</option>
  });

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e)
    onChangeOption && onChangeOption(e.currentTarget.value)
  }

  return (
    <select className={'select-css'} value={restProps.value} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  )
}

