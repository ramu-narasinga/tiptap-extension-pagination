/**
 * @file /src/index.d.ts
 * @name index.d.ts
 * @description TypeScript types for the package
 */

import type { Orientation, PaperSize } from "./types/paper";
import type { Extension, Node } from "@tiptap/core";

declare module "tiptap-extension-pagination" {
    export interface PaginationOptions {
        paperSize: PaperSize;
        paperColour: string;
        paperOrientation: Orientation;
    }

    export const PageNode: Node;

    export const Pagination: Extension<PaginationOptions>;
    export default Pagination;
}
