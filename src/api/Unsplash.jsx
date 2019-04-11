import axios from "axios";

export default axios.create({
	headers: {
		Authorization:
			"Client-ID 05341aab4f8cc1c69dea0d5c121f9e2c2f3363cab31726b38ab7837582ed9be7"
	},
	baseURL: "https://api.unsplash.com"
});
