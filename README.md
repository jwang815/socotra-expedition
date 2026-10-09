# Historical Socotra project page

This project site's `/socotra-expedition/` URL is retired to the current equivalent at https://wpjourneys.com/socotra/.

On 2026-10-09 it was still serving the March 4 itinerary (Git blob 6035a56c5b47d2e6c1c2e2d58a305935c21fc47e), independently of the redirect already published at the same path by the `jwang815.github.io` user-site repository. The response bytes exactly matched this project's index.html. This project page therefore needs its own retirement redirect.

The old index is preserved in Git history at commit 3060fa8d699c62bc9aacdbaa964247b09801c293. The nested wp-homepage source is unchanged. No Pages, domain, DNS, permissions or deployment settings are altered.

This is an immediate HTML meta-refresh redirect with canonical and accessible destination link, not an HTTP 301. JavaScript preserves the original query and fragment. Search engines must recrawl before old index entries disappear.

Run `node test/redirect-test.mjs` to verify the exact destination and preservation behavior.
