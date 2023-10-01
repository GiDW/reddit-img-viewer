function modifyAcceptHeader(details) {
  let newHeaders = details.requestHeaders.map(header => {
    if (header.name.toLowerCase() === 'accept') {
      return {
        name: header.name,
        value: '*/*'
      };
    }
    return header;
  });

  return { requestHeaders: newHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
  modifyAcceptHeader,
  { urls: ['*://i.redd.it/*', '*://external-preview.redd.it/*', '*://preview.redd.it/*'] },
  ['blocking', 'requestHeaders']
);
