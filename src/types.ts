export type PresetConfig = {
  types?: Array<PresetConfigType>
  issuePrefixes?: Array<string>
}

export type PresetConfigType = {
  type: string
  hidden?: boolean
  section: string
}
