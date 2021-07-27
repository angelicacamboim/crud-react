import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/font-awesome.min.css'
import './assets/css/nice-select.css'
import './assets/css/slicknav.min.css'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
