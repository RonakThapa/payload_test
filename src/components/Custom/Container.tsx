import React from 'react'

const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='min-h-[80vh]'>
        {children}
    </div>
  )
}

export default Container