export const convertPeriod = (months: number) => {
  return months < 12 ? `${months}/months` : `${Math.floor(months / 12)}/years`
}

export const formatNumber = (value: number | string) => {
  const bUnit = (value as number) / 1000000000
  if (bUnit > 1) return bUnit.toFixed(1) + 'B'

  const mUnit = (value as number) / 1000000
  if (mUnit > 1) return mUnit.toFixed(1) + 'M'

  const kUnit = (value as number) / 1000
  if (kUnit > 1) return kUnit.toFixed(1) + 'K'

  return value
}

export const calculateAddress = (walletAddress: string) => {
  const maskedAddress = walletAddress.length != 0 ? `${walletAddress.substr(0, 4)}....${walletAddress.substr(-4)}` : ''

  return maskedAddress
}

export const createFileFromBase64 = (base64Data: string): File => {
  const [header, base64String] = base64Data.split(',')
  const byteCharacters = atob(base64String)
  const byteNumbers = new Uint8Array(byteCharacters.length)
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i)
  }
  const blob = new Blob([byteNumbers], {
    type: header.split(':')[1].split(';')[0]
  })

  const file = new File([blob], 'avatar', {
    type: blob.type,
    lastModified: Date.now()
  })

  return file
}
