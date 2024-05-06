'use client'
import React from 'react'

interface RedirectBtnProps {
    title: string,
    path: string
}

const RedirectBtn: React.FC<RedirectBtnProps> = ({ title, path }) => {
  return (
    <div className="message"> <span>Don't have an account?</span> <a href={path}>{title}</a></div>
  )
}

export default RedirectBtn