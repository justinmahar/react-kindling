/** Name of your repository */
const repoName = 'react-library-starter';

/**
 * Configuration for additions to the default Docz theme.
 * Includes Google Analytics, favicon, a footer, and feedback forms.
 */
export const themeAdditionsConfig = {
  /** Google Analytics tracking ID */
  gaTrackingId: undefined, //'UA-000000000-0',
  /** Used to ensure site runs */
  repoName: repoName,
  /** Must be prefixed with repo name for gh-pages. Note: If using gh-pages, favicon only shows up when deployed. */
  faviconUrl: `/${repoName}/public/favicon.ico`,
  footer: {
    /** Set to false to disable the author/"powered by" footer. */
    enabled: true,
    /** Name of project author */
    authorName: 'DevBoldly',
    /** URL to author's page */
    authorUrl: 'https://devboldly.com/',
    /** Set to true if you're a grumpy person :) */
    hideEmoji: false,
    /** Holidays like New Year's Day and Pi Day are announced for fun. It's an easter egg. Hide if you want. */
    hideHolidays: false,
    /** Shoutout to the service hosting the site. */
    hostName: 'GitHub Pages',
    /** Host page. */
    hostUrl: 'https://pages.github.com/',
  },
  feedbackForm: {
    /** Set to false to disable "was this page helpful?" feedback forms for whole site. */
    enabled: true,
    /** Site name submitted along with form, so you can track multiple sites with one form. Not shown to user. */
    siteName: repoName,
    /**
     * Create and inspect your google form (i.e. in Chrome dev tools) and retrieve the form action URL.
     * IMPORTANT: Be sure none of the fields have validation or your submits will fail!
     */
    formActionUrl:
      'https://docs.google.com/forms/u/0/d/e/123abc456def789ghi_0123_a-bcdefg1234567HIJKLMNoqrs123yz/formResponse',
    /** Form field name for the yes/no text field */
    yesNoFieldName: 'entry.123456789',
    /** Form field name for the feedback message text field */
    feedbackFieldName: 'entry.234567890',
    /** Form field name for the site name text field */
    siteFieldName: 'entry.345678901',
    /** Form field name for the page URL text field */
    pageUrlFieldName: 'entry.456789012',
    /**
     * Page paths to exclude the feedback form from.
     * Automatically uses repo name above to exclude in gh-pages as well.
     */
    excludedPaths: ['/', '/mit-license', '/code-of-conduct'],
  },
};
