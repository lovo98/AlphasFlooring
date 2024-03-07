import React, { useEffect, useState } from "react";
import { showNotification } from "~components/common/Notifications";
import axiosConfig from "~/config/axiosConfig";
import Loading from "~components/common/Loading/Loading";
import {
	Badge,
	Button,
	Card,
	Empty,
	Modal,
	Pagination,
	Rate,
	Tooltip,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faTrash } from "@fortawesome/free-solid-svg-icons";
import style from "./styles.module.css";
import { formatearFecha } from "~/helpers/Utilities";
import NewTestimonial from "~components/common/Forms/ModalNewTestimonial";
import useAuth from "~/hooks/useAuth";

const index = () => {
	const [testimonials, setTestimonials] = useState([]);
	const [loading, setLoading] = useState(true);
	const [modal2Open, setModal2Open] = useState(false);
	const [pagination, setPagination] = useState({});
	const { auth } = useAuth();

	useEffect(() => {
		showTestimonials(1, 6);
	}, [modal2Open, auth.user]);

	const showTestimonials = async (page, pageSize) => {
		if (auth.user) {
			await isAdmin(page, pageSize);
		} else {
			await otherUser(page, pageSize);
		}
	};

	const isAdmin = async (page, pageSize) => {
		try {
			const { data } = await axiosConfig.get(
				`/testimonials/all-testimonials?page=${page}&pageSize=${pageSize}`
			);
			setTestimonials(data.data);
			setPagination(data.pagination);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			showNotification(
				"Error",
				"An error ocurred",
				error.response.data.mensaje
			);
		}
	};

	const otherUser = async (page, pageSize) => {
		try {
			const { data } = await axiosConfig.get(
				`/testimonials/only-show-testiomonials?page=${page}&pageSize=${pageSize}`
			);
			setTestimonials(data.data);
			setPagination(data.pagination);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			showNotification(
				"Error",
				"An error ocurred",
				error.response.data.mensaje
			);
		}
	};

	const handlePageChange = (page) => {
		showTestimonials(page, pagination.pageSize);
	};

	const deleteTestimonial = async (id) => {
		try {
			const { data } = await axiosConfig.delete(
				`/testimonials/delete-testimonials/${id}`
			);
			showTestimonials(pagination.page, pagination.pageSize);
			showNotification(
				"success",
				"Success",
				"Testimonial successfully deleted"
			);
		} catch (error) {
			showNotification(
				"Error",
				"An error ocurred",
				error.response.data.mensaje
			);
		}
	};

	const hideOrShowTestimonial = async (id, status) => {
		try {
			const { data } = await axiosConfig.put(
				`/testimonials/hide-testimonials/${id}`,
				{ status }
			);
			showTestimonials(pagination.page, pagination.pageSize);
			showNotification(
				"success",
				"Success",
				status
					? "This testimonial will be displayed on the main screen"
					: "This testimonial will not be displayed on the main screen"
			);
		} catch (error) {
			showNotification(
				"Error",
				"An error ocurred",
				error.response.data.mensaje
			);
		}
	};

	return (
		<section className="features-tabs section center-content has-bottom-divider mt-50">
			<div className="container">
				<div className="features-tabs-inner section-inner">
					<div className="section-header center-content">
						{loading ? (
							<Loading />
						) : (
							<div>
								<div className={style.container_btnAdd}>
									<a
										className="button button-primary button-wide-mobile"
										onClick={() => setModal2Open(true)}
									>
										Create new testiomonial
									</a>
								</div>
								<div className={style.container_cards}>
									{testimonials.length > 0 ? (
										testimonials.map((element, index) => {
											return (
												<div className={style.withCard} key={index}>
													{auth.user ? (
														<Badge.Ribbon
															text={element.status ? "Showing" : "Hidden"}
															color={element.status ? "green" : "red"}
														>
															<Card
																actions={[
																	<Tooltip placement="top" title="Delete">
																		<Button
																			danger
																			type="primary"
																			onClick={() =>
																				deleteTestimonial(element._id)
																			}
																		>
																			Delete
																			<FontAwesomeIcon icon={faTrash} />
																		</Button>
																	</Tooltip>,
																	element.status ? (
																		<Tooltip placement="top" title="Disguise">
																			<Button
																				type="primary"
																				onClick={() =>
																					hideOrShowTestimonial(
																						element._id,
																						!element.status
																					)
																				}
																			>
																				Disguise
																				<FontAwesomeIcon icon={faEyeSlash} />
																			</Button>
																		</Tooltip>
																	) : (
																		<Tooltip placement="top" title="Show">
																			<Button
																				type="primary"
																				onClick={() =>
																					hideOrShowTestimonial(
																						element._id,
																						!element.status
																					)
																				}
																			>
																				Show
																				<FontAwesomeIcon icon={faEye} />
																			</Button>
																		</Tooltip>
																	),
																]}
															>
																<div className={style.container_data_card}>
																	<div>
																		<div
																			className={style.container_header_data}
																		>
																			<span className={style.name}>
																				{element.name}
																			</span>
																			<span className={style.smallText}>
																				{formatearFecha(element.createdAt)}
																			</span>
																		</div>
																		<span className={style.title}>
																			{element.title}
																		</span>
																		<p>{element.description}</p>
																		<Rate
																			disabled
																			defaultValue={element.porcent}
																		/>
																	</div>
																</div>
															</Card>
														</Badge.Ribbon>
													) : (
														<Card>
															<div className={style.container_data_card}>
																<div>
																	<div className={style.container_header_data}>
																		<span className={style.name}>
																			{element.name}
																		</span>
																		<span className={style.smallText}>
																			{formatearFecha(element.createdAt)}
																		</span>
																	</div>
																	<span className={style.title}>
																		{element.title}
																	</span>
																	<p>{element.description}</p>
																	<Rate
																		disabled
																		defaultValue={element.porcent}
																	/>
																</div>
															</div>
														</Card>
													)}
												</div>
											);
										})
									) : (
										<div className={style.container_empty}>
											<Empty />
										</div>
									)}

									{testimonials.length > 0 && (
										<div className={style.pagination}>
											<Pagination
												current={pagination.page}
												pageSize={pagination.pageSize}
												total={pagination.totalItems}
												onChange={handlePageChange}
											/>
										</div>
									)}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			<Modal
				width={800}
				title="Add a new testimonial"
				centered
				open={modal2Open}
				onOk={() => setModal2Open(false)}
				onCancel={() => setModal2Open(false)}
				footer={null}
			>
				<NewTestimonial setModal2Open={setModal2Open} />
			</Modal>
		</section>
	);
};

export default index;
