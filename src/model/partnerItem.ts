export type PartnerItem = {
  partnerName?: string,
  partnerUrl: string,
  partnerDisplayedUrl?: string,
  partnerImageUrl: string,
  isCertified: boolean,
  client_metadata?: {
    client_name: string,
    display_url: string,
  }
};

export type RequestData = {
  nonce: string,
  client_id: string,
};
