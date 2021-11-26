import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { BasicInfo, BasicInfoForm } from "./BasicInfo";
import { Contact, ContactForm } from "./ContactInfo";
import styles from "./Form.module.css";
import { Optional, OptionalForm } from "./Optional";

type FormType = {
  basicInfo: BasicInfoForm;
  contact: ContactForm;
  optional: OptionalForm;
};

const initialFormValues: FormType = {
  basicInfo: {
    name: "",
    email: "",
  },
  contact: {
    street: "",
    city: "",
    country: "Brazil",
  },
  optional: {
    gender: "F",
    newsLetter: true,
  },
};

export const Form = () => {
  const [form, setForm] = useState(initialFormValues);

  // Handlers
  const _handleFormChange = useCallback(
    (
      section: keyof FormType,
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      const name = e.target.name;
      const value =
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;

      setForm((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [name]: value,
        },
      }));
    },
    [setForm]
  );

  const _handleSubmit = useCallback(
    (e: FormEvent) => {
      console.log("This is your data:");
      console.log(form);

      e.preventDefault();
    },
    [form]
  );

  return (
    <div className={styles.Form}>
      <h1>This is the ugliest form ever!</h1>
      <p>
        But it's just to demonstrate the use of memoization and useCallback to
        avoid unnecessary rerenders when controls update the state.
      </p>
      <p>
        For better understand, toggle the{" "}
        <b>Highlight updates when components render.</b> option under DevTools{" "}
        {">"} Components;
      </p>

      <form onSubmit={_handleSubmit}>
        <BasicInfo values={form.basicInfo} onChange={_handleFormChange} />
        <Contact values={form.contact} onChange={_handleFormChange} />
        <Optional values={form.optional} onChange={_handleFormChange} />
        <button type="submit" className={styles.FormBtn}>
          Send!
        </button>
      </form>
    </div>
  );
};
