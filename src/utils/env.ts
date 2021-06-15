export const env = (name: string, defaultValue: string): string => {
  if (process.env[name] != undefined) return process.env[name]!

  return defaultValue
}
