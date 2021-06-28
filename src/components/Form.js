import React from "react";
import { useForm } from "react-hook-form";
import classes from "./Form.module.css";

function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  // const onSubmit = (data) => console.log(data);

  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input placeholder="firstName" {...register("firstName")} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input placeholder="lastName" {...register("lastName")} />
        </div>

        <div>
          <label htmlFor="isDeveloper">Is an developer?</label>
          <input
            type="checkbox"
            placeholder="luo"
            value="yes"
            {...register("isDeveloper")}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email address"
            type="email"
            {...register("email")}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
