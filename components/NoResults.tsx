import React from 'react'
import Link from "next/link";

export const NoResults = ({ message }) => {
  return (
    <>
      <p>{message}</p>
      <p><Link href="/"><a>⇦ Back to Home Page</a></Link></p>
    </>
  )
}
