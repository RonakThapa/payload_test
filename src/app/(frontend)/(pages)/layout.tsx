import Container from '@/components/Custom/Container'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>
}

export default layout
