import { listBlockNotionHtmlAdapterMatcher } from '@blocksuite/affine-block-list';
import { paragraphBlockNotionHtmlAdapterMatcher } from '@blocksuite/affine-block-paragraph';
import type { BlockNotionHtmlAdapterMatcher } from '@blocksuite/affine-shared/adapters';

import { attachmentBlockNotionHtmlAdapterMatcher } from '../../../attachment-block/adapters/notion-html.js';
import { bookmarkBlockNotionHtmlAdapterMatcher } from '../../../bookmark-block/adapters/notion-html.js';
import { codeBlockNotionHtmlAdapterMatcher } from '../../../code-block/adapters/notion-html.js';
import { databaseBlockNotionHtmlAdapterMatcher } from '../../../database-block/adapters/notion-html.js';
import { dividerBlockNotionHtmlAdapterMatcher } from '../../../divider-block/adapters/notion-html.js';
import { imageBlockNotionHtmlAdapterMatcher } from '../../../image-block/adapters/notion-html.js';
import { latexBlockNotionHtmlAdapterMatcher } from '../../../latex-block/adapters/notion-html.js';
import { rootBlockNotionHtmlAdapterMatcher } from '../../../root-block/adapters/notion-html.js';

export const defaultBlockNotionHtmlAdapterMatchers: BlockNotionHtmlAdapterMatcher[] =
  [
    listBlockNotionHtmlAdapterMatcher,
    paragraphBlockNotionHtmlAdapterMatcher,
    codeBlockNotionHtmlAdapterMatcher,
    dividerBlockNotionHtmlAdapterMatcher,
    imageBlockNotionHtmlAdapterMatcher,
    rootBlockNotionHtmlAdapterMatcher,
    bookmarkBlockNotionHtmlAdapterMatcher,
    databaseBlockNotionHtmlAdapterMatcher,
    attachmentBlockNotionHtmlAdapterMatcher,
    latexBlockNotionHtmlAdapterMatcher,
  ];