import Image from 'next/image'
import { useState } from 'react';

export const metadata = {
  title: 'page title',
  openGraph: {
    title: "site title OG"
  }
}

export default function Home() {

  return (
    <div className="page flex gap-3">
      page
    </div>
  )
}
