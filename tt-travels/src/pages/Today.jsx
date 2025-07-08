import React from 'react'
import WhatToday from '../components/WhatToday'

function Today() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">What can I do today?</h2>
      <WhatToday />
    </div>
  )
}

export default Today
