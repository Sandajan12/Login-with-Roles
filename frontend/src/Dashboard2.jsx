import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

const Dashboard2 = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");


  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    const storedRole = localStorage.getItem("role");
    if (storedUser && storedRole) {
      setUser(storedUser);
      setRole(storedRole);

    if (storedRole !== "Staff") {
        navigate("/dashboard3")
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);





  

  return (
    <Container>
      <Typography variant="h4">Welcome {user} {role}</Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          navigate("/login");
        }}
      >
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard2;
