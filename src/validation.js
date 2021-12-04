import * as Yup from "yup";


//  Regex Phone Number
const phoneRegExp = /((09|03|07|08|05)+([0-9]{8})\b)/g;


const formValidation = Yup.object().shape({
  userName: Yup.string()
    .min(5, "Too Short!")
    .max(30, "Too Long!")
    .required("Bắt Buộc!"),

  userPhoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Bắt Buộc!"),

  userEmail: Yup.string()
    .email("Invalid email format")
    .required("Bắt Buộc!"),

  userPassword: Yup.string()
    .min(8, "Password is too short")
    .max(12, "Password is too long")
    .required("Bắt Buộc!"),
  
    userConfirmPwd: Yup.string()
    .min(8, "Password is too short")
    .max(12, "Password is too long")
    .required("Bắt Buộc!"),
    
});


export default formValidation;