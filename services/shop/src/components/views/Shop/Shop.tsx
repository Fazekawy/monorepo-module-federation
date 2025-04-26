import * as styles from "./Shop.module.scss"

import jpeg from "@/assets/jpeg.jpg"
import png from "@/assets/png.png"
import Svg from "@/assets/svg.svg"

const Shop = () => {
	return (
		<div>
			Shop
			<img src={jpeg} alt="" width={1000} />
			<img src={png} alt="" />
			<Svg className={styles.svg} />
		</div>
	)
};


export default Shop