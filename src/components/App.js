import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NoMatch from './NoMatch'
import EmailList from './EmailList'
import Example from './Example'
import NavBar from './NavBar'

const items = [
	{
		name: "Markus Rossi",
		subject: "Lorem Ipsum",
		message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet deserunt reiciendis fuga molestias ut eius assumenda excepturi, incidunt numquam hic, iusto fugiat dolor minima magni saepe nostrum, qui pariatur doloremque."
	},
	{
		name: "Louise Schiffer",
		subject: "Ipsum Ipsum",
		message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet deserunt reiciendis fuga molestias ut eius assumenda excepturi, incidunt numquam hic, iusto fugiat dolor minima magni saepe nostrum, qui pariatur doloremque."
	},
	{
		name: "Hue Bates",
		subject: "Ipsum Lorem",
		message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet deserunt reiciendis fuga molestias ut eius assumenda excepturi, incidunt numquam hic, iusto fugiat dolor minima magni saepe nostrum, qui pariatur doloremque."
	},
	{
		name: "Bill White",
		subject: "Lorem Lorem Lorem",
		message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet deserunt reiciendis fuga molestias ut eius assumenda excepturi, incidunt numquam hic, iusto fugiat dolor minima magni saepe nostrum, qui pariatur doloremque."
	}
]


class App extends React.Component {
	state = {
		items
	}
	render() {
		return (
			<div className='main'>
				<NavBar />
				<Switch>
					<Route exact path="/" 
						render={(props) => <EmailList {...props} items={this.state.items} />}
					/>
					<Route path="/Example" component={Example} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		)
	}
}

export default App