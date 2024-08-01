import { Inter } from 'next/font/google'
import React from 'react'

import '../globals.css'

export const metadata = {
    title:'Threads',
    description:`A Nextjs Meta Threads clone`
}

const inter = Inter({subsets:["latin"]})


function RootLayout({children}:{children:React.ReactNode}) {
  return (
   
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
        </html>
   
  )
}

export default RootLayout