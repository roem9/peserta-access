import * as React from "react";

function IconCurrencyDollarSingapore({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-currency-dollar-singapore" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4" /><path d="M10 6h-4a3 3 0 1 0 0 6h1a3 3 0 0 1 0 6h-4" /><path d="M17 20v-2" /><path d="M18 6v-2" /></svg>;
}

export default IconCurrencyDollarSingapore;