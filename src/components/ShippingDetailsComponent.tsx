import React from "react";
import { Formik } from "formik";
import { schema } from "@/hook/schema";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
export default function ShippingDetailsComponent() {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "", address: "" }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("submit:", values);
          setSubmitting(false);
          resetForm(); // nếu muốn reset sau submit
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ marginBottom: 12 }}>
              <label>Email</label>
              <Input
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <div style={{ color: "red" }}>{errors.email}</div>
              )}
            </div>

            <div style={{ marginBottom: 12 }}>
              <label>Password</label>
              <Input
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <div style={{ color: "red" }}>{errors.password}</div>
              )}
            </div>

            <div style={{ marginBottom: 12 }}>
              <label>phone number</label>
              <Input
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <div style={{ color: "red" }}>{errors.password}</div>
              )}
            </div>

            <div style={{ marginBottom: 12 }}>
              <label>Address</label>
              <Input
                name="address"
                type="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.address && (
                <div style={{ color: "red" }}>{errors.address}</div>
              )}
            </div>

            <Button type="submit" disabled={isSubmitting}>
              Đăng nhập
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
}
