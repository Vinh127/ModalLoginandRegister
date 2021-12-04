import React, { useState, useEffect } from "react";
import { Formik, Field, Form, useFormik, ErrorMessage } from "formik";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import formValidation from "./validation";
import styles from "./modal.module.scss";

function ModalRegister() {
  const [isType, setIsType] = useState("");
  console.log("isType: ", isType);

  const [value, setValue] = useState(0);
  console.log("value:", value);

  function handleSubmit() {}

  return (
    <>
      <div className={styles.header}>
        <div
          className={styles.header__login}
          onClick={() => setIsType("login")}
        >
          <p>Đăng Nhập</p>
        </div>

        <div
          className={styles.header__register}
          onClick={() => setIsType("register")}
        >
          <p>Đăng Ký</p>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.main__layout}>
          <div className={styles.main__layout_left}>
            <img
              src="https://www.bidu.com.vn/images/auth/temp_text.svg"
              alt="Logo"
            />
          </div>

          <div className={styles.main__layout_right}>
            <div className={styles.main__layout_right_form}>
              <h3 className={styles.main__layout_right_form_title}>Đăng Ký</h3>
              <Formik
                initialValues={{
                  userName: "",
                  userEmail: "",
                  userPassword: "",
                  userPhoneNumber: "",
                }}
                validationSchema={formValidation}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className={styles.main__layout_right_form_field}>
                      <Field name="userName" placeholder="Họ và tên" />
                      {errors.userName && touched.userName ? (
                        <p
                          className={styles.main__layout_right_form_field_error}
                        >
                          {errors.userName}
                        </p>
                      ) : null}
                    </div>

                    <div className={styles.main__layout_right_form_field}>
                      <Field
                        id="userEmail"
                        name="userEmail"
                        type="email"
                        placeholder="Email"
                      />

                      {errors.userEmail && touched.userEmail ? (
                        <p
                          className={styles.main__layout_right_form_field_error}
                        >
                          {errors.userEmail}
                        </p>
                      ) : null}
                    </div>

                    <div className={styles.main__layout_right_form_field}>
                      <Field
                        name="userPassword"
                        type="text"
                        placeholder="Mật khẩu"
                      />
                      {errors.userPassword && touched.userPassword ? (
                        <p
                          className={styles.main__layout_right_form_field_error}
                        >
                          {errors.userPassword}
                        </p>
                      ) : null}
                    </div>

                    <div className={styles.main__layout_right_form_field}>
                      <Field
                        id="userConfirmPwd"
                        name="userConfirmPwd"
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                      />
                      {errors.userConfirmPwd && touched.userConfirmPwd ? (
                        <p
                          className={styles.main__layout_right_form_field_error}
                        >
                          {errors.userConfirmPwd}
                        </p>
                      ) : null}
                    </div>

                    <div className={styles.main__layout_right_form_field}>
                      <PhoneInput
                        value={value}
                        onChange={setValue}
                      />
                    </div>

                    <div className={styles.main__layout_right_form_subtitle}>
                      <span>
                        Tôi đồng ý với
                        <span
                          className={
                            styles.main__layout_right_form_subtitle_faq
                          }
                        >
                          Các Điều khoản Hệ thống
                        </span>
                        và
                      </span>
                      <br />
                      <span>
                        <span
                          className={
                            styles.main__layout_right_form_subtitle_faq
                          }
                        >
                          Chính Sách Bảo Mật
                        </span>
                        của Bidu App
                      </span>
                    </div>

                    <button
                      className={styles.main__layout_right_form_button}
                      type="submit"
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ModalRegister;
