let channels = [
    {name: 'HardWare Support'},
    {name: 'Software Support'}
];

class Channel extends React.Component{
    onClick(){
        console.log('I was clicked',this.props.name);
    }
    render(){
        return(
            <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
        )
    }
}
 class ChannelList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.channels.map( channel =>{
                    return(
                        <Channel name={channel.name}/>

                    )

                })}
                 </ul>


        )

    }

 }

class ChannelForm extends React.Component{
    onSubmit(e){
        
    }
    onChange(e){
        console(e.target.value);
    }
    render(){
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type='text'/>
                    onChange={this.onChange.bind(this)}

            </form>
        )
    }
}
class ChannelSection extends React.Component{
    render(){
        return(
            <div>
                <ChannelList channels={channels}/>
                <ChannelForm/>
            </div>

        )


    }
}
ReactDOM.render(<ChannelSection/>,
document.getElementById('app'));