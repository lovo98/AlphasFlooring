import { Rate } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { formatearFecha } from "~/helpers/Utilities";

const Testimonials = () => {
	const navigate = useNavigate();
	const testimonials = [
		{
			id: 1,
			name: "Carlos Lopéz",
			value: 5,
			date: "12/12/2023",
			title:
				"Incredible experience! The Alpha's Flooring team was very professional and attentive to my needs.",
			description: "",
		},
		{
			id: 2,
			name: "APRIL VEGA",
			value: 4.5,
			date: "10/05/2023",
			title:
				"I can't say enough good things about Alphas Flooring From first contact to project completion.",
			description: "",
		},
		{
			id: 3,
			name: "CHRIS",
			value: 5,
			date: "09/10/2023",
			title:
				"Awesome customer service! The team really took the time to understand my needs and provide customized solutions.",
			description: "",
		},
		{
			id: 4,
			name: "AMY SANTIAGO",
			value: 5,
			date: "08/21/2023",
			title:
				"I have been lucky enough to find us for the installation of hardwood floors in my home.",
			description: "",
		},
		{
			id: 5,
			name: "ROSA DÍAZ",
			value: 4.5,
			date: "07/03/2023",
			title:
				"Excellent experience from start to finish not only offers high quality products but also exceptional customer service.",
			description: "",
		},
	];
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
						<div className="timeline-wrap">
							{testimonials.map((element, index) => {
								return (
									<div className="timeline-item" key={index}>
										<div className="timeline-item-inner">
											<div className="timeline-item-header text-color-low tt-u mb-4 reveal-fade">
												{element.name} <br />
												{formatearFecha(element.date)} <br />
												<Rate allowHalf defaultValue={element.value} disabled />
											</div>
											<div className="timeline-item-content fw-700 h4 m-0 reveal-from-side">
												{element.title}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className="center-content mt-50">
						<a
							className="button button-primary button-wide-mobile"
							onClick={() => navigate("/testimonials")}
						>
							See more
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
