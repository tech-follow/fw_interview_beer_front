import React from 'react'

export interface InputProps {
  value: string,
  valid: boolean,
  autoCapitalize?: boolean,
  name: string,
  type: string,
  placeholder: string,
  defaultValue?: string,
  disabled?: boolean,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  onBlur?: React.FocusEventHandler<HTMLInputElement>,
  onFocus?: React.FocusEventHandler<HTMLInputElement>
}