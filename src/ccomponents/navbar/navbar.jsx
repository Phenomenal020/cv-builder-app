import styles from "./navbar.module.css";
import { Link } from "../../../node_modules/react-router-dom/dist";

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@material-ui/core";
import { useState } from "react";

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false)
  const handleAuthOpen = () => {
    setOpen(true);
  };
  const handleSubmit = () => {
    setOpen(false);
    setUser(true);
    setRegister(false)
  }

  const [register, setRegister] = useState(false)

  const handleRegister = () => {
    setRegister(true)
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link to="/">
          <div className={styles.logo}>
            <h2 className={styles.logoElementSmall}>C</h2>
            <h2 className={styles.logoElement}>V</h2>
            <h2 className={styles.logoElementSmall}>A</h2>
            <h2 className={styles.logoElementSmall}>I</h2>
            <h2 className={styles.logoElementSmall}>D</h2>
            <h2 className={styles.logoElementSmall}>E</h2>
          </div>
        </Link>

        <div className={styles.linkContainer}>

          <ul className={styles.linkWrapper}>
            <li className={styles.link}>
              <Button variant="outlined" style={{ border: "none", textTransform: "capitalize", fontWeight: "bold", fontSize: "20px" }}>
                < Link to="/create" style={{ color: "#374046" }}>Build cv</Link>
              </Button>
            </li>
            <li className={styles.link}>
              <Button variant="outlined" style={{ border: "none", textTransform: "capitalize", fontWeight: "bold", fontSize: "20px" }} onClick={handleAuthOpen} >
                < Link to="/about" style={{ color: "#374046" }}>About</Link>
              </Button>
            </li>
            <li className={styles.link}>
              <Button variant="outlined" style={{ border: "none", textTransform: "capitalize", fontWeight: "bold", fontSize: "20px" }} onClick={handleAuthOpen} >
                <Link style={{ color: "#374046" }}>Login</Link>
              </Button>
            </li>
          </ul>

        </div>

        {/* sign in Dialog Box */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle style={{ textAlign: "center" }}>{!register ? `Login` : `Register`}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
            />
            {register && <TextField
              autoFocus
              margin="dense"
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth
              variant="standard"
            />}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <Button type="submit" color="primary" variant="contained" style={{ margin: "8px 0px" }} onClick={handleSubmit}>
                Submit
              </Button>
              {!register &&
                <Button style={{ textAlign: "right", color: "blue", textTransform: "lowercase" }}>
                  Forgot password
                </Button>}
            </div>

            <br />
            {!register && <Typography variant="body1" style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
              Don't have an account? <Button style={{ fontSize: "16px", textTransform: "lowercase", textDecoration: "underline", padding: "6px" }} onClick={handleRegister}>
                Register
              </Button>
            </Typography>}
          </DialogContent>
        </Dialog>

      </div >
    </div >
  );
};

export default Navbar;
