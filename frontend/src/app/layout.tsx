import { getBaseURL } from "@lib/util/env"
import ThemeProviderWrapper from "./ThemeProviderWrapper"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <ThemeProviderWrapper>
          <main className="relative">{props.children}</main>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
