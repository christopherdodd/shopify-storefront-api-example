function apiCall(query) {
  return fetch('[Your Shopify store address]/api/graphql.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/graphql',
      'X-Shopify-Storefront-Access-Token': "[Your storefront access token]"
    },
    "body": query
  }).then(response => response.json());
}

$(document).ready(function() {
  const $app = $('#app');

});