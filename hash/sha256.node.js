import { createHash } from 'node:crypto'

/**
 * @param {Uint8Array} data
 */
export const hash = data => {
  const hasher = createHash('sha256')
  hasher.update(data)
  return hasher.digest()
}
