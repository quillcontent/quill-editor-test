import React from 'react'
import { render } from 'react-dom'

import QuillEditor from './QuillEditor'

import '../stylesheets/editor.css'

document.addEventListener('DOMContentLoaded', () => {
  render(<QuillEditor />, document.getElementById('quill-editor'))
})

// Remove contentEditable errors
console.error = (function() {
  var error = console.error

  return function(exception) {
    if ((exception + '').indexOf('Warning: A component is `contentEditable`') != 0) {
      error.apply(console, arguments)
    }
  }
})()
