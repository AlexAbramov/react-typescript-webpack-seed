import * as React from 'react'
import * as ReactDOM from "react-dom";

interface AppProps{
    header:string
}

interface AppState{
    
}

export class App extends React.PureComponent<AppProps,AppState>{
    constructor(props:AppProps){
        super(props)

    }

    render(){
        return(
            <div>{this.props.header}</div>
        )
    }
}

ReactDOM.render(
 <App header='Hello React!' />, document.getElementById('app')

)