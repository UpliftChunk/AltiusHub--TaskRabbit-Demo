import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";

const Login = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = data => console.log(data);
 
   return (

      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <div className='d-flex justify-content-center p-10'>
       <form onSubmit={handleSubmit(onSubmit)} className='mt-5 d-flex flex-column align-content-start w-fit border border-light '>
          <h1>
             Login User
          </h1> 
          <div>
             <label htmlFor="name">User Name: </label>
             <input type='text' name="name" {...register("name", { required: true })} />
             {errors.exampleRequired && <span>This field is required</span>}
          </div>
          
          <div>
             <label htmlFor="name">Password: </label>
             <input type='text' name="name" {...register("name", { required: true })} />
             {errors.exampleRequired && <span>This field is required</span>}
          </div>
 
             <div className='mt-5'>
                <input type="submit" />
             </div>
       </form>
 
      </div>
 
    );
}
const Register = () => {
   
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = data => console.log(data);
 
   return (

     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
     <div className='d-flex justify-content-center p-10'>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-5 d-flex flex-column align-content-start w-fit border border-light '>
         <h1>
            Register User
         </h1> 
         <div>
            <label htmlFor="name">User Name: </label>
            <input type='text' name="name" {...register("name", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
         </div>
         
         <div>
            <label htmlFor="name">Password: </label>
            <input type='text' name="name" {...register("name", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
         </div>

         <div>
            <label htmlFor="name">email: </label>
            <input type='text' name="name" {...register("name", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
         </div>

            <div className='mt-5'>
               <input type="submit" />
            </div>
      </form>

     </div>

   );
}

const Home = () => {
   const [active, setActive] = useState("register");
   const Load = {
      "register": <Register></Register>,
      "login": <Login></Login>
   }
  return (
    <div
      className='d-flex bg-dark text-center text-white flex-column justify-content-center align-content-center'
      style={{height: '100vh'}}
    >
      <div className='display-2 fw-bold'>Task Rabbit</div>  
      <div className='d-flex gap-1  justify-content-center align-content-center'>
         <Button variant="warning" onClick={()=>setActive("register")}>Register</Button>
         <Button variant="primary" onClick={()=>setActive("login")}>Login</Button>
      </div>  
      <div>
         {Load[active]}
      </div>
    </div>
  )
}

export default Home