import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Bg from '../MainLayout/stars.webp'

const Box = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
`


const windowsDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  }
}

const BgImage = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const { width, height } = windowsDimension()

    setWidth(width)
    setHeight(height)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const { width, height } = windowsDimension()

      setWidth(width)
      setHeight(height)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if(width && height) {
    return (
      <Box>
        <Image
          src={Bg}
          width={width}
          height={height}
        
        />
      </Box>
    )
  }

  return null
}

export default BgImage