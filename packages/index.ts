import { App } from "vue";
import elButton from "./button";
import elIcon from "./icon";
import elButtonGroup from "./button-group";
import elInput from "./input";
import elUpload from "./upload";
import elProgress from "./progress";
import elDatePicker from "./datePicker";
import infiniteScroll from "./infinite-scroll/index";

const components = [
  elButton,
  elIcon,
  elButtonGroup,
  elInput,
  elUpload,
  elProgress,
  elDatePicker,
];
const install = (app: App): void => {
  components.map((component) => app.component(component.name, component));
  infiniteScroll(app);
};

export default {
  install,
  elButton,
  elIcon,
  elButtonGroup,
  elInput,
  elUpload,
  elProgress,
  elDatePicker,
};
