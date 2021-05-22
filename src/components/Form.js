import React from "react";
import classes from "./Form.module.css";

function Form() {
  return (
    <div>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" />
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" required></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
