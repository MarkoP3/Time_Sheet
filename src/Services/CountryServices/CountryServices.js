const axios = require("axios");
const countryServices = {
  getAllCountries: () => {
    return axios.get(`https://localhost:5001/api/countries`);
  },
};

export default countryServices;
