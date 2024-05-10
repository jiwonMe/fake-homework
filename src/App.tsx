import React from 'react'
import createDummyFileBuffer from './utils/createDummyFile'

const App = () => {
  return (
    <div>
      <h1>과제 기한 연장기</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const inputName = (e.target as HTMLFormElement).filename.value;
          const name = inputName.includes('.') ? inputName : `${inputName}.txt`;
          const filesize = Number((e.target as HTMLFormElement).filesize.value)
          const fileBuffer = createDummyFileBuffer(name, filesize * 1024)
          const a = document.createElement('a')
          a.href = fileBuffer.url
          a.download = fileBuffer.name
          a.click()
        }}
      >
        <label htmlFor="filename">이름 및 확장자</label>
        <input type="text" id="filename" name="filename" />
        <label htmlFor="filesize">파일 크기(KB)</label>
        <input type="number" id="filesize" name="filesize" />
        <button type="submit">제출</button>
      </form>
    </div>
  )
}

export default App