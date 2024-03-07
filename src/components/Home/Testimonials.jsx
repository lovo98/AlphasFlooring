import { Empty, Modal, Rate } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosConfig from "~/config/axiosConfig";
import { formatearFecha } from "~/helpers/Utilities";
import Loading from "~components/common/Loading/Loading";
import NewTestimonial from "~components/common/Forms/ModalNewTestimonial";
import { showNotification } from "~components/common/Notifications";

const Testimonials = () => {
	const navigate = useNavigate();
	const [testimonials, setTestimonials] = useState([]);
	const [loading, setLoading] = useState(true);
	const [modal2Open, setModal2Open] = useState(false);

	useEffect(() => {
		allTestimonials();
	}, [modal2Open]);

	const allTestimonials = async () => {
		try {
			const { data } = await axiosConfig(
				`/testimonials/only-show-testiomonials?page=${1}&pageSize=${6}`
			);
			setTestimonials(data.data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			showNotification(
				"error",
				"An error occurred",
				error.response.data.mensaje
			);
		}
	};

	const showModal = () => {
		setModal2Open(true);
	};

	return (
		<section className="roadmap section has-top-divider">
			<div className="container">
				<div className="roadmap-inner section-inner">
					<div className="section-header center-content">
						<div className="container-xs">
							<h2 className="mt-0 mb-16">Testimonials</h2>
						</div>
					</div>
					<div className="timeline">
						{loading ? (
							<Loading />
						) : (
							<div className="timeline-wrap">
								{testimonials.length > 0 ? (
									testimonials.map((element, index) => {
										return (
											<div className="timeline-item" key={index}>
												<div className="timeline-item-inner">
													<div className="timeline-item-header text-color-low tt-u mb-4 reveal-fade">
														{element.name} <br />
														{formatearFecha(element.createdAt)} <br />
														<Rate
															allowHalf
															defaultValue={element.porcent}
															disabled
														/>
													</div>
													<div className="timeline-item-content fw-700 h4 m-0 reveal-from-side">
														{element.title}
													</div>
												</div>
											</div>
										);
									})
								) : (
									<Empty />
								)}
							</div>
						)}
					</div>
					<div className="center-content mt-50">
						<a
							className="button button-primary button-wide-mobile"
							onClick={() =>
								testimonials.length > 0
									? navigate("/testimonials")
									: showModal()
							}
						>
							{testimonials.length > 0
								? "See more"
								: "Create a new testimonial"}
						</a>
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

export default Testimonials;
