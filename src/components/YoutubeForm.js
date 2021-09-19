import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
	name: "",
	channel: "",
	email: "",
};

const onSubmit = (values) => {
	console.log(values);
};

//!yup demo

const validationSchema = Yup.object({
	name: Yup.string().required("Required"),
	email: Yup.string().email("invalid email format").required("Required"),
	channel: Yup.string().required("Required"),
});
// const validate = (values) => {
// 	//!the validate function must return an object

// 	let errors = {};

// 	if (!values.name) {
// 		errors.name = "name is required";
// 	}
// 	if (!values.email) {
// 		errors.name = "email is required";
// 	}
// 	if (!values.channel) {
// 		errors.name = "channel is required";
// 	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
// 		errors.email = "Invalid email format";
// 	}

// 	return errors;
// };

function YoutubeForm() {
	const formik = useFormik({
		initialValues,
		//! onSubmit automatically recieves the form state as its arguments
		onSubmit,
		validationSchema,
		//validate,
	});

	// console.log("form  values ", formik.values);
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div className="form-control">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
					/>
					{formik.touched.name && formik.errors.name ? (
						<div className="error">{formik.errors.name}</div>
					) : null}
				</div>

				<div className="form-control">
					<label htmlFor="email">E-mail</label>
					<input
						type="text"
						name="email"
						id="email"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>

					{formik.touched.email && formik.errors.email ? (
						<div className="error">{formik.errors.email}</div>
					) : null}
				</div>

				<div className="form-control">
					<label htmlFor="channel">Channel</label>
					<input
						type="text"
						name="channel"
						id="channel"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.channel}
					/>
					{formik.touched.channel && formik.errors.channel ? (
						<div className="error">{formik.errors.channel}</div>
					) : null}
				</div>

				<button type="submit"> Submit </button>
			</form>
		</div>
	);
}

export default YoutubeForm;
