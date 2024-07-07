import { Grid, Typography, Button } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: "3" }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Company{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="text">
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="text" >
              {" "}
              Blog{" "}
            </Button>
          </div>
          <div>
            text<Button className="pb-5" variant="text" >
              {" "}
              Press{" "}
            </Button>
          </div>
          <div>
            text<Button className="pb-5" variant="text" >
              {" "}
              Jobs{" "}
            </Button>
          </div>
          <div>
            text<Button className="pb-5" variant="text" >
              {" "}
              Partners{" "}
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Solutions{" "}
          </Typography>
          <div>
            text<Button className="pb-5" variant="text" >
              {" "}
              Marketing{" "}
            </Button>
          </div>
          <div>
            text<Button className="pb-5" variant="text" >
              {" "}
              Analytics{" "}
            </Button>
          </div>
          <div>
            text<Button className="pb-5" variant="text" >
              {" "}
              Commerce{" "}
            </Button>
          </div>
          <div>
            text<Button className="pb-5" variant="text" >
              {" "}
              Insights{" "}
            </Button>
          </div>
          <div>
            text<Button className="pb-5" variant="text" >
              {" "}
              Support{" "}
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Documentation{" "}
          </Typography>
          <div>
            text<Button className="pb-5" variant="text" >
              {" "}
              Guides{" "}
            </Button>
          </div>
          <div>
            text<Button className="pb-5" variant="text" >
              {" "}
              API Status{" "}
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Legal{" "}
          </Typography>
          <div>
            text<Button className="pb-5" variant="text" >
              {" "}
              Claim{" "}
            </Button>
          </div>
          <div>
            text<Button className="pb-5" variant="text" >
              {" "}
              Privacy{" "}
            </Button>
          </div>
          <div>
            text<Button className="pb-5" variant="text" >
              {" "}
              Terms{" "}
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; {new Date().getFullYear()} ShopShavvy. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
