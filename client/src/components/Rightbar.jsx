import {
  Badge,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  Stack,
  Switch,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
];

function Rightbar() {
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  const style = {
    py: 0,
    width: "100%",
    maxWidth: 360,
    borderColor: "divider",
    backgroundColor: "background.paper",
  };
  return (
    <Box
      flex={1.5}
      pl={2}
      boxSizing={"border-box"}
      position="sticky"
      sx={{ height: "25%", top: "90px", maxWidth: "27%" }}
    >
      <Typography fontSize={"1.4rem"} fontWeight={300}>
        Online Friends
      </Typography>
      <AvatarGroup
        total={49}
        max={7}
        sx={{
          marginRight: "10%",
          "& .MuiAvatar-root": {
            width: { md: "2rem", lg: "3rem" },
            height: { md: "2rem", lg: "3rem" },
          },
          mt: 2,
        }}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{
              width: { md: "2rem", lg: "3rem" },
              height: { md: "2rem", lg: "3rem" },
            }}
          />
        </StyledBadge>

        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            sx={{
              width: { md: "2rem", lg: "3rem" },
              height: { md: "2rem", lg: "3rem" },
            }}
            alt="Travis Howard"
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </StyledBadge>

        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            sx={{
              width: { md: "2rem", lg: "3rem" },
              height: { md: "2rem", lg: "3rem" },
            }}
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </StyledBadge>

        <StyledBadge
          sx={{
            width: { md: "2rem", lg: "3rem" },
            height: { md: "2rem", lg: "3rem" },
          }}
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            sx={{
              width: { md: "2rem", lg: "3rem" },
              height: { md: "2rem", lg: "3rem" },
            }}
            alt="Travis Howard"
            src="https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </StyledBadge>

        <StyledBadge
          sx={{
            width: { md: "2rem", lg: "3rem" },
            height: { md: "2rem", lg: "3rem" },
          }}
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            sx={{
              width: { md: "2rem", lg: "3rem" },
              height: { md: "2rem", lg: "3rem" },
            }}
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/3907815/pexels-photo-3907815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </StyledBadge>

        <StyledBadge
          sx={{
            width: { md: "2rem", lg: "3rem" },
            height: { md: "2rem", lg: "3rem" },
          }}
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            sx={{
              width: { md: "2rem", lg: "3rem" },
              height: { md: "2rem", lg: "3rem" },
            }}
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </StyledBadge>

        <StyledBadge
          sx={{
            width: { md: "2rem", lg: "3rem" },
            height: { md: "2rem", lg: "3rem" },
          }}
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            sx={{
              width: { md: "2rem", lg: "3rem" },
              height: { md: "2rem", lg: "3rem" },
            }}
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/2744193/pexels-photo-2744193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </StyledBadge>

        <StyledBadge
          sx={{
            width: { md: "2rem", lg: "3rem" },
            height: { md: "2rem", lg: "3rem" },
          }}
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            sx={{
              width: { md: "2rem", lg: "3rem" },
              height: { md: "2rem", lg: "3rem" },
            }}
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </StyledBadge>
      </AvatarGroup>
      <Typography fontSize={"1.4rem"} fontWeight={300} mt={2}>
        Latest Photos
      </Typography>
      <ImageList
        sx={{ width: 500, height: 125, mt: 2 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography fontSize={"1.4rem"} fontWeight={300} mt={2}>
        Last Conversations
      </Typography>
      <List sx={style}>
        <ListItem sx={{ display: "flex", alignItems: "start" }}>
          <Avatar
            sx={{
              width: { md: "2rem", lg: "3rem" },
              height: { md: "2rem", lg: "3rem" },
            }}
            alt="Travis Howard"
            src="https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Stack ml={2}>
            <Typography fontWeight={"bold"}>Elena Walker</Typography>
            <ListItemText primary="Sort of... I still have to figure out what outfits to bring. How many days again? 🧳" />
          </Stack>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: "flex", alignItems: "start" }}>
          <Avatar
            sx={{
              width: { md: "2rem", lg: "3rem" },
              height: { md: "2rem", lg: "3rem" },
            }}
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/2744193/pexels-photo-2744193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Stack ml={2}>
            <Typography fontWeight={"bold"}>Marly jhonson</Typography>
            <ListItemText primary="Three days, but you know the drill. Always overpack. 😂" />
          </Stack>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: "flex", alignItems: "start" }}>
          <Avatar
            sx={{
              width: { md: "2rem", lg: "3rem" },
              height: { md: "2rem", lg: "3rem" },
            }}
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />

          <Stack ml={2}>
            <Typography fontWeight={"bold"}>Paul Wilson</Typography>
            <ListItemText primary="You can borrow mine! They're super trendy, I swear. 😉" />
          </Stack>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: "flex", alignItems: "start" }}>
          <Avatar
            sx={{
              width: { md: "2rem", lg: "3rem" },
              height: { md: "2rem", lg: "3rem" },
            }}
            alt="Travis Howard"
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Stack ml={2}>
            <Typography fontWeight={"bold"}>Noah Huberman</Typography>
            <ListItemText primary=" Haha, thanks, but you know I like to coordinate. Gotta get that Instagram" />
          </Stack>
        </ListItem>
      </List>
    </Box>
  );
}

export default Rightbar;
