import React from 'react';
import Link from 'next/link'

function Home() {
  return (
    <div>
      <Link href="/calc"><h2>Open Calc v1</h2></Link>
    </div>
  )
}

export default Home