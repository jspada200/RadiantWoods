"use client"

import { ThemeProvider, createTheme } from "@mui/material"

const MuiPalette = {
  primary: {
    main: "#99a15c",
    contrastText: "#FFF"
  },
  secondary: {
    main: "#d9e6f1",
  },
}

// Create a full theme using createTheme
const theme = createTheme({
  palette: MuiPalette,
})

export default function ThemeProviderWrapper(props: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
