import { Button, Form, Input } from "antd";
import React from "react";
import style from "./styles.module.css";
import loginImg from "~assets/images/login.svg";
import axiosConfig from "~/config/axiosConfig";
import { showNotification } from "~components/common/Notifications";
import useAuth from "~/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const index = () => {
	const { setAuth } = useAuth();
	const navigate = useNavigate();

	const onFinish = async (values) => {
		try {
			const { data } = await axiosConfig.post("/usuarios/login", values);
			localStorage.setItem("token", data.token);
			setAuth(data);
			navigate("../testimonials");
		} catch (error) {
			showNotification("error", "Opps!", error.response.data.mensaje);
		}
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<section className="features-tabs section center-content has-bottom-divider mt-50">
			<div className="container">
				<div className="features-tabs-inner section-inner">
					<div className="section-header center-content">
						<div className="center-content">
							<h2 className="mt-0 mb-16">Log in</h2>
							<div className={style.containerFrm}>
								<img
									src={loginImg}
									alt="about_us"
									className={style.img_about}
								/>
								<Form
									name="basic"
									onFinish={onFinish}
									onFinishFailed={onFinishFailed}
									layout="vertical"
									className={style.frm}
								>
									<Form.Item
										label="Username"
										name="user"
										rules={[
											{
												required: true,
												message: "Please input your username!",
											},
										]}
									>
										<Input />
									</Form.Item>

									<Form.Item
										label="Password"
										name="password"
										rules={[
											{
												required: true,
												message: "Please input your password!",
											},
										]}
									>
										<Input.Password />
									</Form.Item>

									<Form.Item>
										<Button className={style.btnLogin} htmlType="submit">
											Submit
										</Button>
									</Form.Item>
								</Form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default index;
