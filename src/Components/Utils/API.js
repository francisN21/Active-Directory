import axios from "axios";

const apiURL = "https://randomuser.me/api/?results=50";

export default {
  UserSearch: function () {
    return axios.get(apiURL);
  },
};
