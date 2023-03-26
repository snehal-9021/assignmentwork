import React from "react";
import Demo from "./Demo";
import Box from '@mui/material/Box';
import {Card,CardContent,Button,Grid,CardMedia,Stack,Avatar,AvatarGroup,Slider,IconButton} from '@mui/material';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import {LocationOnIcon,FavoriteIcon,FolderIcon} from '@mui/icons-material';
import FolderIcon from '@mui/icons-material/Folder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { grey } from "@mui/material/colors";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import Header from "./Header.jtsx";

// import Buttonnav from "./Buttonnav";
export const Ui=({ product })=>{
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  return(
    <div>
         {/* <Header/> */}
         <Box height={50}/>
         <Box sx={{display:"flex"}}>
         <Demo/>
         <Box component="main" sx={{flexGrow:1,p:3}}>
         <Grid container spacing={8}>
  <Grid item xs={8}>
  <Stack spacing={2} direction="row">
  <Card  sx={{ height: 30 + 'vh',width: 68 + 'vh'}} style={{textAlign:"left"}}> 
      <CardContent>
        <Typography  variant="h3" sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
        the definition of benevolent is enjoying helping
        others or someone whose characteristic is being
        friendly
          <br /><br/>
         <Button color="secondary" >
           < VolumeUpIcon />
         </Button>
        </Typography>
      </CardContent>
    </Card>
    <Box height={6}/>
   <Card sx={{ height: 34 + 'vh',width: 82 + 'vh'}} style={{textAlign:"left"}}>
        <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="div">
       Our office
        </Typography><hr></hr>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <LocationOnIcon/> 488,blingum road,Jp Street, NJ, California
        </Typography><hr/>
        <Typography  sx={{ mb: 1.5 }} >
        <LocalPhoneIcon/> +01-992856-8535
          <hr />
        </Typography>
        <Typography  sx={{ mb: 1.5 }} >
        <MailOutlineIcon/> bob.builder@jobporttal.com
          
        </Typography>
        <IconButton aria-label="delete"  color="primary">
  <TwitterIcon variant="Outlined" />
</IconButton>
<IconButton aria-label="delete" color="primary" variant="Outlined">
  < FacebookIcon />
</IconButton>
<IconButton aria-label="delete" color="secondary" variant="Outlined">
  <InstagramIcon />
</IconButton>
<IconButton aria-label="delete"  color="primary">
  < LinkedInIcon />
</IconButton>
        </CardContent>
     </Card>  
     <Box height={6}/>
  <Card sx={{ height: 39+ 'vh',width: 115 + 'vh'}} style={{textAlign:"left"}}>
     <CardMedia
        sx={{ height: 250 }}
      image="data:image/jpeg;base64,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"
      />
    
    
    <BottomNavigation style={{zIndex:1}}>
    <Avatar   sx={{ width: 56, height: 56 ,bgcolor: grey }} src="https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg" />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
    
     </Card> 
     </Stack>
  </Grid>
</Grid>
<Box height={40}/>
<Stack spacing={2} direction="row">



<Card  sx={{ height: 60 + 'vh',width: 115 + 'vh' }} style={{textAlign:"left"}}> 
<Typography variant="h5" color="text.secondary" gutterBottom>
product popular
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    checkout what other people licking the most
        </Typography>
<Box height={3}/>
<Stack direction="row">
      <Card sx={{height:16 + 'vh',width : 52 +'vh'}}>
        <Stack direction="row">
        <Card sx={{height:15+ 'vh',width : 22 +'vh'}}>
           <CardMedia
        component="img"
        image=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbBsZMvEza0nnwAg380q-GO17Q1v3x2Krfg&usqp=CAU"
      /> 
        </Card>
        <Box height={5}/>
        <Box sx={{height:12+ 'vh',width : 22 +'vh',marginLeft:2+'vh' }} >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
   The future of LED bulbs
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
   lorem ipsum is not simply random test </Typography>
   <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  $200 </Typography>
        </Box>
        </Stack>

      </Card>
      <Box height={20}/>
      <Card sx={{height:16 + 'vh',width : 52 +'vh'}} style={{textAlign:"left"}}>
<Stack direction="row">
        <Card sx={{height:15+ 'vh',width : 22 +'vh'}}>
           <CardMedia
        component="img"
        image="data:image/jpeg;base64,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"
      /> 
        </Card>
        <Box height={5}/>
        <Box sx={{height:12+ 'vh',width : 22 +'vh',marginLeft:2+'vh' }} >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
   The fitness watch
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
   lorem ipsum is not simply random test </Typography>
   <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  #275 </Typography>
        </Box>
        </Stack>
</Card>
</Stack>
<Box height={3}/>
<Stack direction="row">
      <Card sx={{height:16 + 'vh',width : 52 +'vh'}} style={{textAlign:"left"}}>
      <Stack direction="row">
        <Card sx={{height:15+ 'vh',width : 22 +'vh'}}>
           <CardMedia
        component="img"
        image=" https://d2xamzlzrdbdbn.cloudfront.net/products/80fb97a5-bf32-4e26-a420-870a33ea01c022301158_182x182.jpg"
      /> 
        </Card>
        <Box height={5}/>
        <Box sx={{height:12+ 'vh',width : 22 +'vh',marginLeft:2+'vh' }} >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Speakers-party time
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
   lorem ipsum is not simply random test </Typography>
   <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  $275 </Typography>
        </Box>
        </Stack>
      </Card>
      <Box height={20}/>
      <Card sx={{height:16 + 'vh',width : 52 +'vh'}} style={{textAlign:"left"}}>
      <Stack direction="row">
        <Card sx={{height:15+ 'vh',width : 22 +'vh'}}>
           <CardMedia
        component="img"
        image=" https://n-lighten.in/wp-content/uploads/2021/12/1939703156-1.jpg"
      /> 
        </Card>
        <Box height={5}/>
        <Box sx={{height:12+ 'vh',width : 22 +'vh',marginLeft:2+'vh' }} >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Study lamp
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
   lorem ipsum is not simply random test </Typography>
   <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  $430 </Typography>
        </Box>
        </Stack>
</Card>
</Stack>
</Card>


    <Box height={15}/>
    <Card  sx={{ height: 60 + 'vh',width: 60 + 'vh' }} style={{textAlign:"left"}}> 
    <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         projects and team
        </Typography>
        <Button variant="contained" color="secondary" size="small" >development</Button><br></br>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        New ui design for product jumbo 
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        70% completed
        </Typography>
       
        <Slider
  aria-label="Temperature"
  defaultValue={70}
  // getAriaValueText={valuetext}
  // color="#00FFFF"
  style={{color:"#00FFFF"}}
/> 
<AvatarGroup total={6} style={{marginRight:28 + 'vh'}}>
  <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=600" />
  <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/6001808/pexels-photo-6001808.jpeg?auto=compress&cs=tinysrgb&w=600" />
  <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
  <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
</AvatarGroup> 
<Button variant="contained" style={{backgroundColor:"#00FFFF"}}size="small" >Designing</Button>

<Typography sx={{ fontSize: 14 }} variant="h3" color="text.secondary" gutterBottom>
promo graphics design for widely
        </Typography>
<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        60% completed
        </Typography>
        <Slider
  aria-label="Temperature"
  defaultValue={60}
  // getAriaValueText={valuetext}
  // color="#00FFFF"
  style={{color:"#00FFFF"}}
/> 
<AvatarGroup total={6} style={{marginRight:28 + 'vh'}}>
  <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=600" />
  <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/6001808/pexels-photo-6001808.jpeg?auto=compress&cs=tinysrgb&w=600" />
  <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
  <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
</AvatarGroup> 
<Button color="secondary" variant="contained" style={{}} size="small">MARKETING</Button>
          </CardContent>
    </Card>
    </Stack>
</Box>
         </Box>
    </div>
  )
}