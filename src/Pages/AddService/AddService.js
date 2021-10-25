import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
      console.log(data)
      axios.post('http://localhost:5000/services', data)
      .then(res => {
          console.log(res);
          if(res.data.insertedId){
              alert('added successfully')
              reset();
          }
      })
    };
    return (
        <div className="add-service mt-5">
            <h1>Please Add Your Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 30 })} placeholder="name"/>
                <textarea {...register("description")} placeholder="description"/>
                <input type="number" {...register("price")} placeholder="price"/>
                <input {...register("img")} placeholder="image url"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;