import * as React from 'react';
import { Helmet } from 'react-helmet';

export interface GoogleAnalyticsProps {
  trackingId: string;
}

export default function GoogleAnalytics(props: GoogleAnalyticsProps): JSX.Element {
  return (
    <Helmet>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${props.trackingId}`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${props.trackingId}');
        `}
      </script>
    </Helmet>
  );
}
