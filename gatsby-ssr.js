import React from 'react';

// Google site verification for Docz
const googleSiteVerification = undefined; //'abcdefg123456789hijk_6j4eSThtszNtFH9QRBKSlY';

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  if (googleSiteVerification) {
    const headComponents = getHeadComponents();
    headComponents.push(
      <meta key="google-site-verification" name="google-site-verification" content={googleSiteVerification} />
    );
    replaceHeadComponents(headComponents);
  }
};
