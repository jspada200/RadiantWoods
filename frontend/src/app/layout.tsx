import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');{" "}
        </style>
      </head>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
