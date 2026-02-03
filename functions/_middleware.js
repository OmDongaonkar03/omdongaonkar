export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // Redirect .pages.dev to custom domain with 301 (permanent redirect)
  if (url.hostname.endsWith('.pages.dev')) {
    const newUrl = `https://omdongaonkar.in${url.pathname}${url.search}${url.hash}`;
    return Response.redirect(newUrl, 301);
  }
  
  // Continue to next middleware or page
  return context.next();
}