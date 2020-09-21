import React from 'react'
import routes from './config/routes'

const ExampleComponent = () => {
  return (
    <div>
      Example Component
      </div>
  )
}

function App () {
  return (
    <div>
      {/* Bắt buộc phải sử dụng dynamic import dựa theo
          file routes config (khi thêm bớt component thì chỉ sửa file config)
          không cần sửa code tại đây
      */}
      {
        routes.map((config) => {
          return <ExampleComponent />
        })
      }
    </div>
  )
}

export default App