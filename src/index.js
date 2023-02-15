import "./sass/style.scss";
import {
	populateOnLoad,
	populateContent,
	changeTemperatureMetric,
} from "./modules/populateContent";

populateOnLoad();
populateContent();
changeTemperatureMetric();
