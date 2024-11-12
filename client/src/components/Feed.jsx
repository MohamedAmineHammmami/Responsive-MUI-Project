import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ChatIcon from "@mui/icons-material/Chat";
import React, { useState } from "react";

function Feed() {
  const [like, setLike] = useState(false);
  return (
    <Box
      flex={4}
      m={2}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Card>
        <Stack direction="row" sx={{ alignItems: "center", m: 2 }}>
          <Avatar
            src="https://media.licdn.com/dms/image/v2/D4D03AQGXzd6r8QRZpw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707862681011?e=1736985600&v=beta&t=R_MMfIz4add5gdbY2I7due0zHa5NW9G35Y9ypav52eg"
            aria-label="recipe"
            sx={{ width: "4rem", height: "4rem" }}
          />
          <Stack ml={1}>
            <Typography fontWeight={"bold"}>Mohamed Amine</Typography>
            <Typography>November 12, 2024</Typography>
          </Stack>
        </Stack>
        <CardMedia
          component="img"
          src="https://images.pexels.com/photos/29047306/pexels-photo-29047306/free-photo-of-vintage-street-market-in-nancy-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="vintageImg"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => setLike(!like)}>
            {like ? <FavoriteIcon sx={{ color: "red" }} /> : <FavoriteIcon />}
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <Typography sx={{ textDecoration: "underline" }}>
            22 Comments
          </Typography>
        </CardActions>
      </Card>
      <Card>
        <Stack direction="row" sx={{ alignItems: "center", m: 2 }}>
          <Avatar
            src="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            aria-label="recipe"
            sx={{ width: "4rem", height: "4rem" }}
          />
          <Stack ml={1}>
            <Typography fontWeight={"bold"}>Loren Walker</Typography>
            <Typography>November 12, 2024</Typography>
          </Stack>
        </Stack>
        <CardMedia
          component="img"
          width={320}
          src="https://images.pexels.com/photos/15067261/pexels-photo-15067261/free-photo-of-side-view-of-a-parked-pontiac-bonneville.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="vintageImg"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => setLike(!like)}>
            {like ? <FavoriteIcon sx={{ color: "red" }} /> : <FavoriteIcon />}
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <Typography sx={{ textDecoration: "underline" }}>
            22 Comments
          </Typography>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Feed;
