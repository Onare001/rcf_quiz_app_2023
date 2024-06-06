import { serialize } from 'cookie';

export const clearAllCookies = () => {
  // Clear all cookies
  const cookies = document.cookie.split(';');

  cookies.forEach((cookie) => {
    const cookieName = cookie.split('=')[0].trim();
    document.cookie = `${cookieName}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  });
};
