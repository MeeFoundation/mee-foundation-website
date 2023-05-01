import { init, MeeConsentDuration } from 'mee-js-sdk';
import Astro from 'astro'

export const sdkInit = () => {
  init({
    client_metadata: {
      client_name: 'Mee Foundation',
      logo_uri: 'https://mee.foundation/favicon.png',
      display_url: 'mee.foundation',
      contacts: [],
    },
    redirect_uri: 'https://mee.foundation/',
    claims: {
      id_token: {
        name: {
          attribute_type: 'https://schema.org/name',
          name: 'First Name',
          typ: 'string',
          essential: true,
          retention_duration: MeeConsentDuration.ephemeral,
          business_purpose: '',
          is_sensitive: true,
        },
        email: {
          attribute_type: 'https://schema.org/email',
          name: 'Email',
          typ: 'email',
          essential: false,
          retention_duration: MeeConsentDuration.ephemeral,
          business_purpose: '',
          is_sensitive: true,
        },
      },
    },
  }, (data) => {
    localStorage.setItem('userData', JSON.stringify(data))

    if (data !== null
      && typeof data?.data !== 'undefined'
      && typeof data?.data.name !== 'undefined'
    ) {
      Astro.redirect("/subscribe");
    } else {
      // setShowToast(true);
      // add daisy?
      console.error("Connection attempt was unsuccessful")
      setTimeout(() => {
        // setShowToast(false);
      }, 2000);
    }
  });
}