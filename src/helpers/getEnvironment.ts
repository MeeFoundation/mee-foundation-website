export enum Environment {
  devWeb,
  devApp,
  prodWeb,
  prodApp,
}

export const getEnvironment = () => {
  switch (window.location.hostname) {
    case 'auth.mee.foundation': return Environment.prodApp;
    case 'auth-dev.mee.foundation': return Environment.devApp;
    case 'www.mee.foundation': return Environment.prodWeb;
    case 'www-dev.mee.foundation': return Environment.devWeb;
    default: return Environment.prodWeb;
  }
};
