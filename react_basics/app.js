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
    constructor(props){
        super(props);
        this.state = {};

    }
    onChange(e){
        this.setState({
            channelName: e.target.value
        });
        //   console.log(e.target.value);
    }
    onSubmit(e){
        // on submit event handler.
        let {channelName} = this.state;
        console.log(channelName);
        // channels.push({
        //     name: channelName
        // });
        this.setState({
            channelName: ''
        });
        this.props.addChannel(channelName);  
        e.preventDefault();
        
    }
   
    render(){
        return(
            <form onSubmit={this.onSubmit.bind(this)}> 
                <input type='text'
                     onChange={this.onChange.bind(this)}
                     value={this.state.channelName}

                    />

            </form>
        )
    }
}
class ChannelSection extends React.Component{
    // for storing new array values and rendering them in our channel.
    constructor(props){
        super(props);
        this.state={
            channels: [
                {name: 'HardWare Support'},
                {name: 'Software Support'}
            ]
        };

    }
    addChannel(name){
        let {channels} = this.state;
        channel.push({name: name});
        this.setState({
            channels: channels
        });
    }

    render(){
        return(
            <div>
                <ChannelList channels={this.state.channels}/>
                <ChannelForm addChannel={this.addChannel.bind(this)}/>
            </div>

        )


    }
}
ReactDOM.render(<ChannelSection/>,
document.getElementById('app'));