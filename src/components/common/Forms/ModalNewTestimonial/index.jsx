import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button, Form, Input, Rate } from "antd";
const { TextArea } = Input;
import { showNotification } from "~components/common/Notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axiosConfig from "~/config/axiosConfig";
import { expresiones } from "~/helpers/Utilities";

const index = ({ setModal2Open }) => {
	const [loading, setLoading] = useState(false);
	const [form] = Form.useForm();

	const onFinish = async (values) => {
		setLoading(true);
		try {
			const { data } = await axiosConfig.post(
				"/testimonials/create-testimonials",
				values
			);
			setLoading(false);
			setModal2Open(false);
			showNotification("success", "Success", data.mensaje);
			form.resetFields();
		} catch (error) {
			setLoading(false);
			showNotification("error", "An error occurred", error.response.mensaje);
		}
	};

	const onFinishFailed = async (values) => {
		showNotification("error", "Invalid fields", "Please check the fields.");
	};

	return (
		<div className={styles.container}>
			<Form
				form={form}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				layout="vertical"
				className={styles.frm}
			>
				<Form.Item
					label="Name"
					name="name"
					rules={[
						{ required: true, message: "Please input your name." },
						{ pattern: expresiones.nombre, message: "Invalid name." },
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Title"
					name="title"
					rules={[{ required: true, message: "Please input title." }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Description"
					name="description"
					rules={[{ required: true, message: "Please input description." }]}
				>
					<TextArea rows={4} showCount maxLength={300} />
				</Form.Item>

				<Form.Item
					label="Porcent"
					name="porcent"
					rules={[{ required: true, message: "Please input procent." }]}
				>
					<Rate />
				</Form.Item>
				<div className={`${styles.container} ${styles.gap15}`}>
					{!loading ? (
						<>
							<Button
								htmlType="submit"
								className={`${styles.standarBtn} ${styles.addBtn}`}
							>
								Add
							</Button>
							<Button
								className={`${styles.standarBtn} ${styles.cancelBtn}`}
								onClick={() => {
									setModal2Open(false), form.resetFields();
								}}
							>
								Cancel
							</Button>
						</>
					) : (
						<Button className={`${styles.standarBtn} `} disabled>
							Creating testimony <FontAwesomeIcon icon={faSpinner} spin />
						</Button>
					)}
				</div>
			</Form>
		</div>
	);
};

export default index;
