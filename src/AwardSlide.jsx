import React from "react";
import { styled } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import style from "./styles/awardSlide.module.css";
import "@fontsource/syne";
import "@fontsource/oxygen-mono/400.css";
import "@fontsource/archivo/300.css";

function Awardslide(props) {
  const itemHeight = 0.065*window.innerHeight;
  const theme = createTheme({
    typography: {
      fontFamily: "Syne",
      fontSize: 32,
      color: "#0E1219",
    },
  });
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
    ...theme.typography.body2,
    height: itemHeight,
    color: "#0E1219",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  }));
  return (
    <div className={style.container}>
      <div className={style.title}>AWARD-WINNING DESIGNS</div>
      <div className={style.mesh} />
      <ThemeProvider theme={theme}>
        <Box className={style.box} sx={{ flexGrow: 10 }} padding={0}>
          <Grid container spacing={0} direction="column">
            <Grid item={true} xs={4}>
              <Item className={style.item} sx={{ boxShadow: 0, borderTop: 2 }}>
                <div className={style.number}>
                    [01]
                </div>
                <a className={style.link} href="/">CQS</a>
                <div className={style.itemDetail}>
                  29m DSS Super-Maxi Race Yatch
                </div>
              </Item>
            </Grid>
            <Grid item={true} xs={4}>
              <Item className={style.item} sx={{ boxShadow: 0, borderTop: 2 }}>
              <div className={style.number}>
                    [02]
                </div>
                <a className={style.link} href="/">ANARCHY</a>
                <div className={style.itemDetail}>YD 37.11M Club Racer</div>
              </Item>
            </Grid>
            <Grid item={true} xs={4}>
              <Item className={style.item} sx={{ boxShadow: 0, borderTop: 2 }}>
              <div className={style.number}>
                    [03]
                </div>
                <a className={style.link} href="/">A FORK IN THE ROAD</a>
                <div className={style.itemDetail}>13.7M IRC Race Yacht</div>
              </Item>
            </Grid>
            <Grid item={true} xs={4}>
              <Item className={style.item} sx={{ boxShadow: 0, borderTop: 2 }}>
              <div className={style.number}>
                    [04]
                </div>
                <a className={style.link} href="/">GENERALLEE</a>
                <div className={style.itemDetail}>11.3M IRC Race Yacht</div>
              </Item>
            </Grid>
            <Grid item={true} xs={4}>
              <Item className={style.item} sx={{ boxShadow: 0, borderTop: 2 }}>
              <div className={style.number}>
                    [05]
                </div>
                <a className={style.link} href="/">ZANA/KONICA MINOLTA/LAHANA</a>
                <div className={style.itemDetail}>30m Super-Maxi</div>
              </Item>
            </Grid>
            <Grid item={true} xs={4}>
              <Item className={style.item} sx={{ boxShadow: 0, borderTop: 2 }}>
              <div className={style.number}>
                    [06]
                </div>
                <a className={style.link} href="/">WIRED</a>
                <div className={style.itemDetail}>
                  15.85m Canting Keel Racer/Cruiser
                </div>
              </Item>
            </Grid>
            <Grid item={true} xs={4}>
              <Item className={style.item} sx={{ boxShadow: 0, borderTop: 2 }}>
              <div className={style.number}>
                    [07]
                </div>
                <a className={style.link} href="/">JAZZ PLAYER</a>
                <div className={style.itemDetail}>
                  12m Production One Design Racer / Cruiser
                </div>
              </Item>
            </Grid>
            <Grid item={true} xs={4}>
              <Item className={style.item} sx={{ boxShadow: 0, borderTop: 2 }}>
              <div className={style.number}>
                    [08]
                </div>
                <a className={style.link} href="/">BRAVEHEART/VALKYRIE</a>
                <div className={style.itemDetail}>
                  15.85m TP52 Carbon Race Yacht
                </div>
              </Item>
            </Grid>
            <Grid item={true} xs={4}>
              <Item className={style.item} sx={{ boxShadow: 0, borderTop: 2 }}>
              <div className={style.number}>
                    [09]
                </div>
                <a className={style.link} href="/">NZL-403</a>
                <div className={style.itemDetail}>
                  Mini 650 Carbon Race Yacht
                </div>
              </Item>
            </Grid>
            
            <Grid item={true} xs={4}>
              <Item className={style.item} sx={{ boxShadow: 0, borderTop: 2 }}>
              <div className={style.number}>
                    [10]
                </div>
                <a className={style.link} href="/">TIME TO BURN</a>
                <div className={style.itemDetail}>
                12.5m Cruiser / Racer
                </div>
              </Item>
            </Grid>
            <Grid item={true} xs={4}>
              <Item
                className={style.itemBold}
                sx={{
                  boxShadow: 0,
                  borderTop: 2,
                  borderBottom: 2,
                  justifyContent: "end",
                }}
              >
                <a className={style.link} href="/">VIEW MORE</a>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Awardslide;
