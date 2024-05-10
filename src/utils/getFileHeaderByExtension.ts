type FileExtension = 'txt' | 'pdf' | 'xlsx' | 'docx' | 'pptx' | 'hwp' | 'zip' | string | undefined

function getFileHeaderByExtension(extension: FileExtension): string {
  try {
    switch (extension) {
      case 'txt':
        return new Uint8Array([0xEF, 0xBB, 0xBF]).reduce((acc, cur) => acc + String.fromCharCode(cur), '')
      case 'pdf':
        return new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2D]).reduce((acc, cur) => acc + String.fromCharCode(cur), '')
      case 'xlsx':
        return new Uint8Array([0x50, 0x4B, 0x03, 0x04]).reduce((acc, cur) => acc + String.fromCharCode(cur), '')
      case 'docx':
        return new Uint8Array([0x50, 0x4B, 0x03, 0x04]).reduce((acc, cur) => acc + String.fromCharCode(cur), '')
      case 'pptx':
        return new Uint8Array([0x50, 0x4B, 0x03, 0x04]).reduce((acc, cur) => acc + String.fromCharCode(cur), '')
      case new Uint8Array([0x50, 0x4B, 0x03, 0x04]).reduce((acc, cur) => acc + String.fromCharCode(cur), ''):
      case 'zip':
        return new Uint8Array([0x50, 0x4B, 0x03, 0x04]).reduce((acc, cur) => acc + String.fromCharCode(cur), '')
      default:
        throw new Error('Unsupported file extension')
    }
  } finally {
    return ''
  }
}

export default getFileHeaderByExtension