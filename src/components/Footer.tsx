// Base component generated using AI
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  TextField,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

export const Footer = () => {
  const hourLinks = [
    { day: "Monday", hours: "9:00am-7:30pm" },
    { day: "Tuesday", hours: "9:00am-7:30pm" },
    { day: "Wednesday", hours: "9:00am-7:30pm" },
    { day: "Thursday", hours: "9:00am-7:30pm" },
    { day: "Friday", hours: "9:00am-9:30pm" },
    { day: "Saturday", hours: "9:00am-9:30pm" },
    { day: "Sunday", hours: "9:00am-9:30pm" },
  ];
  const generalLinks = ["Privacy", "Terms", "Contact Us"];

  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#FF85B7",
        color: "#750031",
        pt: 6,
        pb: 3,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Pely's Ice Cream
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, color: "#fff" }}>
              <i>
                Serving rustic, family-style ice cream by the seaside for over
                50 years
              </i>
            </Typography>
          </Grid>

          {/* Hours */}
          <Grid>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Hours
            </Typography>
            {hourLinks.map((item) => (
              <Link
                key={item.day}
                href="#"
                underline="none"
                display="block"
                sx={{
                  color: "#fff",
                  mb: 1,
                  "&:hover": { color: "#fff" },
                }}
              >
                <b>{item.day}: </b>
                {item.hours}
              </Link>
            ))}
          </Grid>

          {/* Resources */}
          {/* <Grid>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Resources
            </Typography>
            {resourceLinks.map((item) => (
              <Link
                key={item}
                href="#"
                underline="none"
                display="block"
                sx={{
                  color: "#fff",
                  mb: 1,
                  "&:hover": { color: "#fff" },
                }}
              >
                {item}
              </Link>
            ))}
          </Grid> */}

          {/* Newsletter */}
          <Grid>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Subscribe to our newsletter!
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
              Get the latest news and flavor additons straight to your inbox
            </Typography>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 1,
              }}
            >
              <TextField
                size="small"
                placeholder="Email"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 1,
                }}
              />
              {/* TODO: Change the input active color to match better
              (it's currently) */}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#750031",
                  px: 3,
                  "&:hover": { backgroundColor: "#b11154" },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 2 }}>
          <IconButton sx={{ color: "#fff" }}>
            <Facebook />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <Twitter />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <Instagram />
          </IconButton>
        </Box>

        <Divider sx={{ backgroundColor: "#ac3164", my: 4 }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: { xs: "center", sm: "left" },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Pely's Ice Cream. All rights reserved.
          </Typography>

          <Box>
            {generalLinks.map((link: string) => (
              <Link
                href="#"
                underline="none"
                sx={{
                  color: "#ffdcea",
                  mx: 1,
                  "&:hover": { color: "#fff0f6" },
                }}
              >
                {link}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
