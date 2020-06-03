import React from 'react'
import './StylishButton.css'

export default function StylishButton({children, rounded, red, green, disabled, className, ...props})  {
  let builtClassName = 'StylishButton';
  builtClassName = `${builtClassName}${!!rounded ? ' StylishButton--rounded' : ''}`;
  builtClassName = `${builtClassName}${!!red ? ' StylishButton--red' : ''}`;
  builtClassName = `${builtClassName}${!!green ? ' StylishButton--green' : ''}`;
  builtClassName = `${builtClassName}${!!disabled ? ' StylishButton--disabled' : ''}`
  builtClassName = `${builtClassName}${!!className
    ? ` ${className}`
    : ''
  }`

  const isDisabled = !!disabled;

  return (
    <button className={builtClassName} disabled={isDisabled} {...props}>
      {children}
    </button>
  ) 
}
