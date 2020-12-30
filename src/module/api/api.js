export default {
	async fetchData(query) {
		const url = `http://localhost:3000/${query}`;
		const reponse = await fetch(url);
		const data = await reponse.json();
		return data;
	},
};
