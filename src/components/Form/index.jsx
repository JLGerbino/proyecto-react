import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const FormComp = ({ confirmPurchase, formVis, setFormVis }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (dataDelFormulario) => {
    confirmPurchase(dataDelFormulario);
  }; 
  const handleClose = () => {
    setFormVis(false);
  };

  return (
    <>
      <Modal show={formVis} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <label>Nombre</label>
            <input
              className="form-control"
              {...register("nombre", {
                required: true,
                minLength: 2,
              })}
            />
            {errors?.nombre?.type === "required" && (
              <p>Es necesario ingresar tu nombre</p>
            )}
            {errors?.nombre?.type === "minLength" && (
              <p>El nombre debe superar los 2 caracteres</p>
            )}
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email1"
              {...register("email1", { minLength: 3, required: true })}
            />
            {errors?.email1?.type === "minLength" && (
              <p>La dirección de mail no es valida</p>
            )}
            {errors?.email1?.type === "required" && (
              <p>Es necesario ingresar tu email</p>
            )}
            <label>Confimar email</label>
            <input
              className="form-control"
              type="email"
              name="email2"
              {...register("email2", {
                minLength: 3,
                required: true,
                validate: {
                  equalMails: (mail2) => mail2 === getValues().email1,
                },
              })}
            />
            {errors?.email2?.type === "minLength" && (
              <p>La dirección de mail no es valida</p>
            )}
            {errors?.email2?.type === "required" && (
              <p>Es necesario ingresar tu email</p>
            )}
            {errors?.email2?.type === "equalMails" && (
              <p>Los mails deben ser iguales</p>
            )}
            <label>Teléfono</label>
            <input
              className="form-control"
              type="number"
              {...register("phone", {
                minLength: 10,
                maxLength: 10,
                required: true,
              })}
            />
            {errors?.phone?.type === "minLength" && (
              <p>El teléfono debe tener 10 digitos</p>
            )}
            {errors?.phone?.type === "required" && (
              <p>Es necesario ingresar tu teléfono</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit">
              Confirmar compra
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default FormComp;
