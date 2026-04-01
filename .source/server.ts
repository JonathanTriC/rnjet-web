// @ts-nocheck
import * as __fd_glob_17 from "../src/content/docs/running/ios.mdx?collection=docs"
import * as __fd_glob_16 from "../src/content/docs/running/android.mdx?collection=docs"
import * as __fd_glob_15 from "../src/content/docs/getting-started/installation.mdx?collection=docs"
import * as __fd_glob_14 from "../src/content/docs/guides/theming.mdx?collection=docs"
import * as __fd_glob_13 from "../src/content/docs/guides/i18n.mdx?collection=docs"
import * as __fd_glob_12 from "../src/content/docs/guides/api-layer.mdx?collection=docs"
import * as __fd_glob_11 from "../src/content/docs/environment/configuration.mdx?collection=docs"
import * as __fd_glob_10 from "../src/content/docs/components/text.mdx?collection=docs"
import * as __fd_glob_9 from "../src/content/docs/architecture/tech-stack.mdx?collection=docs"
import * as __fd_glob_8 from "../src/content/docs/architecture/project-structure.mdx?collection=docs"
import * as __fd_glob_7 from "../src/content/docs/index.mdx?collection=docs"
import { default as __fd_glob_6 } from "../src/content/docs/running/meta.json?collection=docs"
import { default as __fd_glob_5 } from "../src/content/docs/guides/meta.json?collection=docs"
import { default as __fd_glob_4 } from "../src/content/docs/getting-started/meta.json?collection=docs"
import { default as __fd_glob_3 } from "../src/content/docs/environment/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../src/content/docs/components/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../src/content/docs/architecture/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../src/content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "src/content/docs", {"meta.json": __fd_glob_0, "architecture/meta.json": __fd_glob_1, "components/meta.json": __fd_glob_2, "environment/meta.json": __fd_glob_3, "getting-started/meta.json": __fd_glob_4, "guides/meta.json": __fd_glob_5, "running/meta.json": __fd_glob_6, }, {"index.mdx": __fd_glob_7, "architecture/project-structure.mdx": __fd_glob_8, "architecture/tech-stack.mdx": __fd_glob_9, "components/text.mdx": __fd_glob_10, "environment/configuration.mdx": __fd_glob_11, "guides/api-layer.mdx": __fd_glob_12, "guides/i18n.mdx": __fd_glob_13, "guides/theming.mdx": __fd_glob_14, "getting-started/installation.mdx": __fd_glob_15, "running/android.mdx": __fd_glob_16, "running/ios.mdx": __fd_glob_17, });