import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import React from 'react'
import Topbar from '@/components/shared/Topbar'
import Bottombar from '@/components/shared/Bottombar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'

import '../globals.css'

export const metadata = {
    title:'Circlify',
    description:`A Nextjs Meta Threads clone`
}

const inter = Inter({subsets:["latin"]})


function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <ClerkProvider>
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
              <Topbar/>
                  <main>
                    <LeftSidebar/>
                          <section className='main-container'>
                            <div className="w-full max-w-4xl">
                                {children}
                            </div>
                          </section>
                    <RightSidebar/>
                  </main>
              <Bottombar/>

            
               
            </body>
        </html>
    </ClerkProvider>
  )
}

export default RootLayout