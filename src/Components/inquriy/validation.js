import * as Yup from "yup"

export const InquirySchema = Yup.object().shape({
    name: Yup.string().required("Please Enter Firstname !"),
    lastname: Yup.string().required("Please Enter Lastname !"),
    email: Yup.string().email().required("Please Enter Your EmailAdress !"),
    message: Yup.string().required("Please Enter Your Message !"),
    package: Yup.string().required('Package is required').oneOf([ '10 Days' , '20 Days' , '25 Days'], 'Invalid Package'),
    service : Yup.string().required("Interested in is required !"),
});