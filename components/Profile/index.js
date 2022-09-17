import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import myPic from './duane.jpg'
import Link from 'next/link'



const commonStyles = {

  m: 1,
  borderColor: 'text.primary',
  
  textAlign: 'center'
};


const Profile = () => {
  return (
    <Box p={2} flex={6} sx = {{...commonStyles  }}>
      <Typography variant='h4' sx = {{fontFamily: 'Indie Flower, cursive', marginBottom: '30px'}}>
        Web Dev of the Year
      </Typography>
      <span className="image-wrapper">
        <Image
            width={250}
            height={250}
            src={myPic} 
            alt="Duane's Pic" 
            layout='intrinsic'
        />
      </span>
      <Typography variant="h5" color="primary.main" sx = {{fontFamily: 'Indie Flower, cursive', marginTop: '30px', marginBottom: '10px'}}>
        &ldquo;I build custom-made web applications, if you want to know more, hit this button:&rdquo;
      </Typography>
      <Link href="/contact" passHref>
        <button className = 'btn btn-know'>Know More</button>
      </Link>
  </Box>
  )
}

export default Profile