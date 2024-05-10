import React, { useEffect } from 'react'
import createDummyFileBuffer from './utils/createDummyFile'
import mixpanel from 'mixpanel-browser'

mixpanel.init('0678f5c13bc7953ae9c2f1112de13dcf')

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-3">과제 기한 연장기</h1>
      <p className="text-gray-700 text-sm">파일 이름과 크기를 입력하면 해당 크기의 빈 파일을 다운로드합니다.</p>
      <p className="text-gray-700 text-sm mb-6">그 일단 만들기는 했는데... 어떻게 쓰는지는 알아서...</p>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(e) => {
          mixpanel.track('Create / Save File', {
            filename: (e.target as HTMLFormElement).filename.value,
            filesize: Number((e.target as HTMLFormElement).filesize.value),
          })
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
        <div className="mb-4">
          <label htmlFor="filename" className="block text-gray-700 text-sm font-bold mb-2">이름 및 확장자</label>
          <input type="text" id="filename" name="filename" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
          <label htmlFor="filesize" className="block text-gray-700 text-sm font-bold mb-2">파일 크기(KB)</label>
          <input type="number" id="filesize" name="filesize" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">다운로드</button>
        </div>
      </form>
      <p className="text-gray-600 text-xs">jiwon.me © 2024</p>
      <a onClick={() => {
        mixpanel.track('Share URL')
        // share on ios
        if (navigator.share) {
          navigator.share({
            title: '과제 기한 연장기',
            text: '파일 이름과 크기를 입력하면 해당 크기의 빈 파일을 다운로드합니다.',
            // current page url
            url: window.location.href,
          })
        }

        // share on android
        if (navigator['share']) {
          navigator['share']({
            title: '과제 기한 연장기',
            text: '파일 이름과 크기를 입력하면 해당 크기의 빈 파일을 다운로드합니다.',
            url: window.location.href,
          })
        }

        // share on desktop
        if (navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href)
          alert('URL이 복사되었습니다.')
        }
      }} className="text-blue-500 text-xs cursor-pointer">공유하기</a>
    </div>
  )
}

export default App