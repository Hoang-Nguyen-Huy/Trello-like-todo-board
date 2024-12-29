import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  basename: "/",
  prerender: ["/"],
} satisfies Config;
