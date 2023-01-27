/**
 * Copyright 2023 Workgrid Software
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react'
import Link from '@mui/material/Link'
import NotSoSimpleMarkdown from 'simple-markdown'

// Setup NotSoSimpleMarkdown
// Here's a whitelistof things we accept in our markdown string
const markdownRules = {
  br: {
    ...NotSoSimpleMarkdown.defaultRules.br,
    match: NotSoSimpleMarkdown.anyScopeRegex(/^\n\n/),
    parse: () => {
      return {}
    },
    react: (node, output, state) => {
      return NotSoSimpleMarkdown.reactElement('br', state.key, {})
    },
  },
  link: {
    ...NotSoSimpleMarkdown.defaultRules.link,
    parse: (capture, parse, state) => {
      return {
        content: parse(capture[1], state),
        target: unescapeUrl(capture[2]),
        title: capture[3],
        variant: state.variant,
      }
    },
    react: (node, output, state) => {
      // Instead of rendering an <a> tag, a MUI component is rendered
      return (
        <Link
          key={state.key}
          variant={node.variant}
          href={NotSoSimpleMarkdown.sanitizeUrl(node.target)}
          target="_blank"
          rel="noopener noreferrer"
          title={node.title}
        >
          {output(node.content, state)}
        </Link>
      )
    },
  },
  em: NotSoSimpleMarkdown.defaultRules.em,
  escape: NotSoSimpleMarkdown.defaultRules.escape,
  strong: NotSoSimpleMarkdown.defaultRules.strong,
  text: NotSoSimpleMarkdown.defaultRules.text,
  strongUnderline: {
    ...NotSoSimpleMarkdown.defaultRules.strong,
    match: NotSoSimpleMarkdown.inlineRegex(/^__([\s\S]+?)__(?!_)/),
  },
}

// Create the parser with these rules
const rawBuiltParser = NotSoSimpleMarkdown.parserFor(markdownRules)
const parse = (source, variant) => {
  return rawBuiltParser(source, { inline: true, variant: variant || '' })
}
const reactOutput = NotSoSimpleMarkdown.reactFor(NotSoSimpleMarkdown.ruleOutput(markdownRules, 'react'))

/**
 * @param {string} rawUrlString
 * @returns {string}
 */
const UNESCAPE_URL_R = /\\([^0-9A-Za-z\s])/g
const unescapeUrl = (rawUrlString /* : string */) => {
  return rawUrlString.replace(UNESCAPE_URL_R, '$1')
}

export default function processMarkdown(text, variant = null) {
  // Shortcut for empty text
  if (!text) {
    return null
  }
  const parseTree = parse(text, variant)
  return reactOutput(parseTree)
}
