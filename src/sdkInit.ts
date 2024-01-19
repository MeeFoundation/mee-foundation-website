import {init, MeeConsentDuration} from 'mee-js-sdk';

export const sdkInit = (errorConnectCb: () => void) => {
  init(
    {
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
            retention_duration: MeeConsentDuration.whileUsingApp,
            business_purpose: '',
            is_sensitive: true,
            order: 2,
          },
          middleName: {
            attribute_type: 'https://schema.org/name',
            name: 'Middle Name',
            typ: 'string',
            essential: true,
            retention_duration: MeeConsentDuration.whileUsingApp,
            business_purpose: '',
            is_sensitive: true,
            order: 3,
          },
          lastName: {
            attribute_type: 'https://schema.org/name',
            name: 'Last Name',
            typ: 'string',
            essential: true,
            retention_duration: MeeConsentDuration.whileUsingApp,
            business_purpose: '',
            is_sensitive: true,
            order: 1,
          },
          email: {
            attribute_type: 'https://schema.org/email',
            name: 'Email',
            typ: 'email',
            essential: false,
            retention_duration: MeeConsentDuration.whileUsingApp,
            business_purpose: '',
            is_sensitive: true,
          },
        },
      },
    },
    (data) => {
      localStorage.setItem('userData', window.btoa(JSON.stringify(data)));
      if (
        data !== null &&
        typeof data?.data !== 'undefined' &&
        typeof data?.data.name !== 'undefined'
      ) {
        window.location.href = '/congratulation';
      } else {
        errorConnectCb();
      }
    },
  );
};
