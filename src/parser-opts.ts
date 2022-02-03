'use strict'

import { PresetConfig } from './types'

export default async function (config: PresetConfig) {
  config = defaultConfig(config)
  return {
    headerPattern: /^(\w*)(?:\((.*)\))?!?: (.*)$/,
    breakingHeaderPattern: /^(\w*)(?:\((.*)\))?!: (.*)$/,
    headerCorrespondence: ['type', 'scope', 'subject'],
    noteKeywords: ['BREAKING CHANGE', 'BREAKING-CHANGE'],
    revertPattern: /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
    revertCorrespondence: ['header', 'hash'],
    issuePrefixes: config.issuePrefixes,
  }
}

// merge user set configuration with default configuration.
function defaultConfig(config: PresetConfig): PresetConfig {
  config = config || {}
  config.issuePrefixes = config.issuePrefixes || ['#']
  return config
}
