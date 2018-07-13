const TOKEN_KEY = 'TZ_TOKEN';

export function getToken() {
  return window.localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  return window.localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken() {
  return window.localStorage.removeItem(TOKEN_KEY);
}

export function goLogin() {
  removeToken();
  setTimeout(() => {
    window.location.href = process.env.AUTH_HOST;
  }, 1500);
}
