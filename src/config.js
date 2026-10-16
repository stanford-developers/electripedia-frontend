// Backend base URL, same shape as deepsolar-1's src/config.js.
// Override with VITE_API_URL in .env.local (e.g. a deployed API).

const LOCAL_URL = "http://127.0.0.1:8000";

const getBaseUrl = () => {
  return import.meta.env.VITE_API_URL ?? LOCAL_URL;
};

export default getBaseUrl;
