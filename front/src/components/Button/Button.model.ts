import React from 'react'

interface BaseButtonsProps {
  text: string
  disabled?: boolean
  type?: 'button' | "submit" | "link"
  onClick?: React.MouseEventHandler
  to?: string
}

interface LinkButtonProps extends BaseButtonsProps {
  type: "link"
  to: string
}

interface ActionButtonProps extends BaseButtonsProps {
  type: "submit" | "button"
}

export type ButtonProps = ActionButtonProps | LinkButtonProps