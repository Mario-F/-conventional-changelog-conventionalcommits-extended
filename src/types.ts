export type PresetConfig = {
  types?: Array<PresetConfigType>
}

export type PresetConfigType = {
  type: string
  hidden?: boolean
  section: string
}
