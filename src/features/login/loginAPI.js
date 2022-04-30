export const fetchData = async (data) => {
  const response = await fetch(
    "https://github-repo-task.herokuapp.com/authenticate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return await response.json();
};

export const fetchRepo = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};
