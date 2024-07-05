export function decodeBase64Url(base64Url: string): string {
  base64Url = base64Url.replace(/-/g, '+').replace(/_/g, '/');

  const pad = base64Url.length % 4;
  if (pad) {
    base64Url += '='.repeat(4 - pad);
  }
  const decodedString = atob(base64Url);
  
  return decodedString;
}

export function decodeJwt(token: string) {
  const parts = token.split('.');
  if (parts.length !== 3) {
    throw new Error('Invalid token');
  }
  const payload = parts[1];
  const decodedPayload = decodeBase64Url(payload);
  const payloadJson = JSON.parse(decodedPayload);
  return payloadJson;
}

export function isTokenExpired(token: string): boolean {
  try {
    const payload = decodeJwt(token);

    const exp = payload.exp;

    if (!exp) {
      throw new Error('Token does not have expiration time');
    }

    const currentTime = Math.floor(Date.now() / 1000);
    return currentTime >= exp;
  } catch (error) {
    console.error(error);
    return true; 
  }
}