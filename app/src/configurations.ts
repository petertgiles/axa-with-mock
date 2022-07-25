export const configurationIdentityServer = {
    client_id: 'interactive.public.short',
    redirect_uri: window.location.origin+'/authentication/callback',
    silent_redirect_uri: window.location.origin+'/authentication/silent-callback',
    scope: 'openid profile email api offline_access',
    authority: 'https://demo.duendesoftware.com',
   // refresh_time_before_tokens_expiration_in_second: 70,
    service_worker_relative_url:'/OidcServiceWorker.js',
    service_worker_only: false, 
    // storage: localStorage
  };

  export const configurationSignInCanada = {
    client_id: '662cad1a-2d6f-4b86-aa96-2a8df9aac4d3',
    redirect_uri: 'http://localhost:8000/auth-callback',
    //silent_redirect_uri: window.location.origin+'/authentication/silent-callback',
    scope: 'openid offline_access',
    authority: 'https://te-auth.id.tbs-sct.gc.ca/oxauth',
   // refresh_time_before_tokens_expiration_in_second: 70,
    service_worker_relative_url:'/OidcServiceWorker.js',
    service_worker_only: false, 
    // storage: localStorage
  };


export const configurationIdentityServerWithHash = {
    client_id: 'interactive.public.short',
    redirect_uri: window.location.origin+'/multi-auth/authentification#authentication-callback',
    silent_redirect_uri: window.location.origin+'/multi-auth/authentification#authentication-silent-callback',
    scope: 'openid profile email api offline_access',
    authority: 'https://demo.duendesoftware.com',
    refresh_time_before_tokens_expiration_in_second: 70,
    service_worker_relative_url:'/OidcServiceWorker.js',
    service_worker_only: false,
};

export const configurationIdentityServerWithoutDiscovery = {
    client_id: 'interactive.public.short',
    redirect_uri: window.location.origin+'/authentication/callback',
    silent_redirect_uri: window.location.origin+'/authentication/silent-callback',
    scope: 'openid profile email api offline_access',
    authority: 'https://demo.duendesoftware.com',
    authority_configuration: {
        authorization_endpoint: 'https://demo.duendesoftware.com/connect/authorize',
        token_endpoint: 'https://demo.duendesoftware.com/connect/token',
        userinfo_endpoint: 'https://demo.duendesoftware.com/connect/userinfo',
        end_session_endpoint: 'https://demo.duendesoftware.com/connect/endsession',
        revocation_endpoint: 'https://demo.duendesoftware.com/connect/revocation',
    },
    refresh_time_before_tokens_expiration_in_second: 70,
    service_worker_relative_url:'/OidcServiceWorker.js',
    service_worker_only: false,
};

export const configurationAuth0 = {
    client_id: 'xGZxEAJhzlkuQUlWl90y1ntIX-0UDWHx',
    redirect_uri: window.location.origin+'/callback',
    scope: 'openid profile email api offline_access',
    authority: 'https://kdhttps.auth0.com',
    refresh_time_before_tokens_expiration_in_second: 70,
    service_worker_relative_url:'/OidcServiceWorker.js',
    service_worker_only: false,
};

export const configurationGoogle = {
    client_id: '908893276222-f2drloh56ll0g99md38lv2k810d0nk0p.apps.googleusercontent.com',
    redirect_uri: `${window.location.origin}/multi-auth/callback-google`,
    silent_redirect_uri: window.location.origin+'/multi-auth/silent-callback-google',
    scope: 'openid profile email',
    authority: 'https://accounts.google.com/',
    service_worker_relative_url:'/OidcServiceWorker.js',
    service_worker_only: false,
    token_request_extras: {
        client_secret : "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"
    }
};

export const configurationMockAuth = {    
    client_id: '00000000-0000-0000-0000-000000000000',
    redirect_uri: window.location.origin+'/callback',
    //silent_redirect_uri: window.location.origin+'/authentication/silent-callback',
    scope: 'openid offline_access',
    authority: 'http://localhost:8080/oxauth',
   // refresh_time_before_tokens_expiration_in_second: 70,
    service_worker_relative_url:'/OidcServiceWorker.js',
    service_worker_only: true, 
    // storage: localStorage
  };
