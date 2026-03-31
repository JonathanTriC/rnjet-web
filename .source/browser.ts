// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../src/content/docs/index.mdx?collection=docs"), "architecture/project-structure.mdx": () => import("../src/content/docs/architecture/project-structure.mdx?collection=docs"), "architecture/tech-stack.mdx": () => import("../src/content/docs/architecture/tech-stack.mdx?collection=docs"), "environment/configuration.mdx": () => import("../src/content/docs/environment/configuration.mdx?collection=docs"), "getting-started/installation.mdx": () => import("../src/content/docs/getting-started/installation.mdx?collection=docs"), "guides/api-layer.mdx": () => import("../src/content/docs/guides/api-layer.mdx?collection=docs"), "guides/i18n.mdx": () => import("../src/content/docs/guides/i18n.mdx?collection=docs"), "guides/theming.mdx": () => import("../src/content/docs/guides/theming.mdx?collection=docs"), "components/text.mdx": () => import("../src/content/docs/components/text.mdx?collection=docs"), "running/android.mdx": () => import("../src/content/docs/running/android.mdx?collection=docs"), "running/ios.mdx": () => import("../src/content/docs/running/ios.mdx?collection=docs"), }),
};
export default browserCollections;