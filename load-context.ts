typescript
Copy
import { type PlatformProxy } from "wrangler";

// Context and environment type definitions
type Env = {
  SHOPIFY_API_KEY?: string;
  SHOPIFY_API_SECRET?: string;
  SHOPIFY_APP_URL?: string;
  DATABASE_URL?: string;
  SCOPES?: string;
}

// Context loading function
export function getLoadContext({ context }: GetLoadContextArgs) {
  return context;
}