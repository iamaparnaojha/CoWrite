import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Provider from './Provider'
import { ThemeProvider } from './ThemeProvider'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata:Metadata={
  title:'LiveDocs',
  description:'Your go-to collaborative editor'
}
export default function RootLayout({ children }:{children:React.ReactNode} ) {
  return (
   <ClerkProvider
   appearance={{
    baseTheme: undefined,
    variables:{
      colorPrimary:'#3371FF',
      fontSize:'16px',
      colorText: '#ffffff',
      colorTextSecondary: '#b0b9c3',
      colorInputBackground: '#1a1a2e',
      colorInputBorder: '#3f4653',
      colorBackground: '#0f172a',
    }
   }}
   >
<html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider>
          <Provider>
            {children}
          </Provider>
        </ThemeProvider>
      </body>
    </html>
   </ClerkProvider>
  )
}
