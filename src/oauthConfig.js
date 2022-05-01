const authEndpoint = "https://github.com/login/oauth/authorize";

export const getAuthorizeHref = () => {
  const clientId = "6c1f90610f8c333f562f";
  const redirectUri = "https://github-repo-clone-task.vercel.app/login";
  return `${authEndpoint}?scope=user&client_id=${clientId}&redirect_uri=${redirectUri}`;
};
