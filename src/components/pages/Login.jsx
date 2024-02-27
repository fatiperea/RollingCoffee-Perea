import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegar=useNavigate("/administrador");

  const onSubmit = (dato) => {
    console.log(dato);
    if (login(dato)) {
      Swal.fire({
        title: "Usuario logueado",
        text: "usuario logueado",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: "El correo o la contraseña ingresada son incorrectos",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese email"
            {...register("email", {
              required: "El email es obligatorio",
              minLength: { value: 4, message: "minimo de 4 caracteres" },
              maxLength: { value: 30, message: "maximo de 30 caracteres" },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                        
                message: "Ingresar correo valido",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.email?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: { value: 6, message: "minimo de 6 caracteres" },
              maxLength: { value: 10, message: "maximo de 10 caracteres" },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message: "Mayusc, minusc y num",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Login;
