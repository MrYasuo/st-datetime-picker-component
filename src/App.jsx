import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import { Streamlit, withStreamlitConnection } from "streamlit-component-lib";
import "./App.css";
import luxonGenerateConfig from "rc-picker/lib/generate/luxon";
import generatePicker from "antd/es/date-picker/generatePicker";

const MyDatePicker = generatePicker(luxonGenerateConfig);
const { RangePicker } = MyDatePicker;

function App() {
	const [value, setValue] = useState([DateTime.now(), DateTime.now()]);
	useEffect(() => Streamlit.setFrameHeight());

	return (
		<RangePicker
			// onChange={(value) => console.log(value)}
			format={"dd/MM/yyyy HH:mm:ss"}
			showTime={true}
			open={true}
			value={value}
			onChange={([start, end]) => setValue([start, end])}
			onOk={() => Streamlit.setComponentValue(value.map((v) => v.toISO()))}
		/>
	);
}

export default withStreamlitConnection(App);
