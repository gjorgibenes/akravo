import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for
    // - /api, /_next, /_vercel, /images, /favicon.ico, etc.
    "/((?!api|_next|_vercel|images|favicon\\.ico|apple-touch-icon\\.png|site\\.webmanifest|robots\\.txt|sitemap\\.xml|.*\\..*).*)",
  ],
};
