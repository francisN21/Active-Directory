import axios from "axios";

const apiURL = "https://randomuser.me/api/?results=50";

async function UserSearch() {
  try {
    const response = await axios.get(apiURL);
    console.log(response);
  } catch (error) {}
}

module.exports = UserSearch;
