import axios from "axios";

export const fetchUser = async context => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    context.commit("mutateUsers", data);
    context.commit("mutateLoading");
  } catch (error) {
    console.log(error.message);
    context.commit("mutateLoading");
  }
};
