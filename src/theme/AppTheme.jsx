import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purpleTheme } from "./purpleTheme"



//*Higher  order component : compoente superior que dentro de el tendra otros componentes
export const AppTheme = ({children}) => {
  return (
   <ThemeProvider theme={purpleTheme} >
    <CssBaseline />
    {children}
   </ThemeProvider>
  )
}
