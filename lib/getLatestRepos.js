import axios from "axios";

const getLatestRepos = async (data, token) => {
  try {
    const username = data.githubUsername;
    const url = `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=6`;

    const config = token
      ? { headers: { Authorization: `token ${token}` } }
      : undefined;

    const response = await axios.get(url, config);

    const repos = response?.data;

    if (repos === undefined || !Array.isArray(repos)) {
      throw new Error("Unexpected API response format");
    }

    return repos;
  } catch (err) {
    console.error("Github API Error: ", err.message);
    return [];
  }
};

export default getLatestRepos;
