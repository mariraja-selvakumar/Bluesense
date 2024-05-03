import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import admin from "../../assets/images/admin.png";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().required("Enter the username"),
    password: yup.string().required("Enter the password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = () => navigate("/admin");

  return (
    <Box className="login">
      <Card className="login-card">
        <Box className="login-title">
          <Box component="img" className="login-img" alt="logo" src={admin} />
          <Typography component="h5" variant="h5" sx={{ marginY: 2 }}>
            Bluesense Admin
          </Typography>
        </Box>
        <Grid
          component="form"
          container
          spacing={2}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid item md={12}>
            <TextField
              label="Username"
              variant="outlined"
              size="small"
              fullWidth
              {...register("username")}
              error={Boolean(errors?.username)}
              helperText={errors?.username?.message}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              label="Password"
              variant="outlined"
              size="small"
              fullWidth
              {...register("password")}
              error={Boolean(errors?.password)}
              helperText={errors?.password?.message}
            />
          </Grid>
          <Grid item md={12}>
            <Button
              className="login-btn"
              variant="contained"
              fullWidth
              type="submit"
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Login;
