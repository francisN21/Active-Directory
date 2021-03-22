import axios from "axios";

const apiURL = "https://randomuser.me/api/?results=50";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  UserSearch: function () {
    return axios.get(apiURL);
  },
};
