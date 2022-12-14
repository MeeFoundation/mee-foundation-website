import React from 'react';
import { useParams } from 'react-router-dom';
import { MaxW } from 'src/components/MaxW';
import appStoreImg from '../assets/appStore.svg';

export const PARTNER_DATA = 'partnerData';
export const APP_STORE_LINK = 'itms-beta://';
export const LOCAL_STORAGE_WRITE_PAGE = 'https://www-dev.mee.foundation/#/redirect/';

export const DownloadPage: React.FC = () => {
  const { partnerData } = useParams();
  return (
    <MaxW>
      <div className="h-screen flex flex-row items-center justify-center">
        <button
          type="button"
          onClick={() => {
          // navigator.clipboard.writeText(window.location.href);
            try {
              if (typeof partnerData !== 'undefined') localStorage.setItem(PARTNER_DATA, partnerData);
            } finally {
              window.location.href = APP_STORE_LINK;
            }
          }}
          className=""
        >
          <img alt="App Store" src={appStoreImg} />
        </button>
      </div>
    </MaxW>
  );
};
// W3sic3RvcmFnZUR1cmF0aW9uIjp7Im1hbnVhbFJlbW92ZSI6e319LCJ2YWx1ZSI6ImRpZDprZXJpOkVYcTVZcWFMNkw0OHBmMGZ1N0lVaEwwSlJhVTJfUnhGUDBBTDQzd1luMTQ4IiwiaXNSZXF1aXJlZCI6dHJ1ZSwibmFtZSI6IlByaXZhdGUgUGVyc29uYWwgSWRlbnRpZmllciIsImhhc1ZhbHVlIjp0cnVlLCJ0eXBlIjp7ImlkIjp7fX19LHsiaXNSZXF1aXJlZCI6dHJ1ZSwicHJvdmlkZWRCeSI6IkxpbmtlZEluIiwiaGFzVmFsdWUiOnRydWUsInN0b3JhZ2VEdXJhdGlvbiI6eyJtYW51YWxSZW1vdmUiOnt9fSwidmFsdWUiOiJwYXVsQG1lZXByb2plY3Qub3JnIiwidHlwZSI6eyJlbWFpbCI6e319LCJuYW1lIjoiRW1haWwifSx7ImlzUmVxdWlyZWQiOnRydWUsInByb3ZpZGVkQnkiOiJQUklWTyIsImhhc1ZhbHVlIjpmYWxzZSwic3RvcmFnZUR1cmF0aW9uIjp7Im1hbnVhbFJlbW92ZSI6e319LCJ2YWx1ZSI6InRydWUiLCJ0eXBlIjp7ImFncmVlbWVudCI6e319LCJuYW1lIjoiSXMgYXQgbGVhc3QgMTMgeWVhcnMgb2xkIn1d
