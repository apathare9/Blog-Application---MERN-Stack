const oktaAuthConfig = {
    issuer: 'https://dev-89797906.okta.com/oauth2/default',
    clientId: '0oa2dui95kA3ssD2f5d7',
    redirectUri: window.location.origin + '/login/callback',
};
  
const oktaSignInConfig = {
    baseUrl: 'https://dev-89797906.okta.com',
    clientId: '0oa2dui95kA3ssD2f5d7',
    redirectUri: window.location.origin + '/login/callback',
    logo: 'blog.png',
    authParams: {
        // If your app is configured to use the Implicit flow
        // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
        // you will need to uncomment the below line
        // pkce: false
    }
// Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
};
  
export { oktaAuthConfig, oktaSignInConfig };