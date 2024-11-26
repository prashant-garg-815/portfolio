import { Typography } from "@mui/material"
import { disclaimer } from "../data"

export const Footer = () => {
  return (
    <Typography color='#94a3b8' fontSize={'12px'} dangerouslySetInnerHTML={{__html: disclaimer}} />
  )
}