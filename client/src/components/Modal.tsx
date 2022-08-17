import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import UserModel from '../models/UserModel';

type MyModalType = {
  title: string,
  user: UserModel | null,
  func: Function
}

const MyModal = ({title, user, func}:MyModalType) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    reset()
  };
  const {register, handleSubmit, reset} = useForm();
  const onSubmit = (data: any) => {
      func(data);
      handleClose();
  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       {title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <div className="row">
            <div className="form-group col-md-3">
              <input {...register("_id")} type="text" className="form-control" defaultValue={user?._id} name="id" id="id" hidden />
            </div>

        </div>
        <div className="row">
            <div className="form-group col-md-12 mb-3">
                <label htmlFor="firstName">First Name</label>
                <input {...register("firstName")} type="text" className="form-control" defaultValue={user?.firstName} name="firstName" id="firstName" />
            </div>
        </div>
        <div className="row">
            <div className="form-group col-md-12 mb-3">
                <label htmlFor="lastName">Last Name</label>
                <input {...register("lastName")} type="text" className="form-control" defaultValue={user?.lastName} name="lastName" id="lastName" />
            </div>
        </div>
        <div className="row">
            <div className="form-group col-md-12 mb-3">
                <label htmlFor="email">Email</label>
                <input {...register("email")} type="text" className="form-control" defaultValue={user?.email} name="email" id="email" />
            </div>
        </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit(onSubmit)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}


export default MyModal