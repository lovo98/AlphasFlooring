import React from "react";
import style from "./styles.module.css";

const Loading = () => {
	return (
		<div className={style.container}>
			<div className={style.lds_spinner}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loading;
