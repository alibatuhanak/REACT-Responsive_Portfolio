import "./Form.css";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Form = () => {
	const { t } = useTranslation();

	const [formData, setFormData] = useState({
		user_name: "",
		user_email: "",
		subject: "",
		message: "",
	});
	function handleChange(e) {
		const { name, value } = e.target;
		setFormData(prevFormData => {
			return {
				...prevFormData,
				[name]: value,
			};
		});
	}
	console.log(process.env);

	const form = useRef();

	const sendEmail = async e => {
		e.preventDefault(); //sayfayı f5lemiyor ve buraya götürmüyor /index.html?firstName=asdasd&lastName=asdasd&em
		try {
			await emailjs
				.sendForm(
					process.env.REACT_APP_YOUR_SERVICE_ID,
					process.env.REACT_APP_YOUR_TEMPLATE_ID,
					form.current,
					process.env.REACT_APP_YOUR_PUBLIC_KEY
				)
				.then(res => {
					console.log(res.text);
					toast.success(t("Form.1"));
					setFormData({
						user_name: "",
						user_email: "",
						subject: "",
						message: "",
					});
				});
		} catch (error) {
			console.log(error);
			console.log(process.env);
			toast.error(t("Form.2"));
		}
	};
	// e.target.reset()
	// grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	return (
		<div className="form">
			<form ref={form} onSubmit={sendEmail}>
				<label>{t("Form.3")}</label>
				<input
					type="text"
					name="user_name"
					value={formData.user_name}
					onChange={handleChange}
					required
				/>
				<label>{t("Form.4")}</label>
				<input
					type="email"
					name="user_email"
					value={formData.user_email}
					onChange={handleChange}
					required
				/>
				<label>{t("Form.5")}</label>
				<input
					type="text"
					name="subject"
					value={formData.subject}
					onChange={handleChange}
					required
				/>
				<label>{t("Form.6")}</label>
				<textarea
					name="message"
					rows="6"
					placeholder={t("Form.7")}
					value={formData.message}
					onChange={handleChange}
					required
				></textarea>
				<button className="btn">{t("Form.8")}</button>
				<ToastContainer
					theme="light"
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</form>
		</div>
	);
};

export default Form;
