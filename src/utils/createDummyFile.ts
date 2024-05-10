function createDummyFileBuffer(name: string, size: number) {
  // Generate a buffer with the specified size filled with dummy data
  const buffer = new ArrayBuffer(size);
  const uint8View = new Uint8Array(buffer);
  for (let i = 0; i < size; i++) {
    // Fill the buffer with dummy data (e.g., 0)
    uint8View[i] = 0;
  }

  // Create a blob from the buffer and generate a URL for it
  const blob = new Blob([buffer], { type: 'application/octet-stream' });
  const fileUrl = URL.createObjectURL(blob);

  // Create a dummy file with the specified name and URL
  const dummyFile = {
    name: name,
    url: fileUrl,
    size: size,
  };

  // Return the dummy file object
  return dummyFile;
}

export default createDummyFileBuffer;