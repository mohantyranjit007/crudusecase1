 import React,{Component} from "react"


 class App extends Component {

    state = {
        newTitle:"",
        newDescription:"",
        newTopic:"",
        AddedAgenda:[
            {
                title:"Angular",
                description:"Some description about angular",
                topics:[
                    "Introduction","javascript","Why Angular?",
                    "Understanding Versions","Fundamentals"
                ]
            },
            {
                title:"Vue",
                description:"Some description about angular",
                topics:[
                    "Introduction","javascript","Why Vue?",
                    "Vue Bindings","Component Interactions"
                ]
            },
            ],
            topicsArr:[],
            showAgendaBlock:false
            }
 changeFun = e => {
    const value = e.target.value
    const name = e.target.name
    this.setState({[name]:value})
 }

 topicFun = () =>{
    this.state.topicsArr.push(this.state.newTopic)
    this.setState({newTopic:""})
 }

 agendaFun = () =>{
    var agenda ={
        title: this.state.newTitle,
        description: this.state.description,
        topics: this.state.topics,
    }
    this.setState({newTitle:""})
    this.setState({newTitle:""})
    this.setState({newDescription:""})
    this.setState({newTopics:""})
    this.setState({topicsArr:[]})
    this.state.AddedAgenda.push(agenda)
 }
 formCheck = (e)=>{
    e.preventDefault()
 }
 checkAgendaFun =()=>{
    this.state.showAgendaBlock === false ? this.setState({showAgendaBlock:
    true}):this.setState({ showAgendaBlock:false})
 }

render() {
    return(
        <div>
            <h1 className="mx-5 mb-5">
                Agenda Manager
            </h1>
            {!this.state.showAgendaBlock &&
            <div className="container" role="addAgenda">
                <button className="btn btn-info" onClick={this.checkAgendaFun} role="goToView">
                    Click TO View Agenda
                </button>
                <form onSubmit={this.formCheck}>
                    <div className="my-3">
                        <label className="form-label">
                            Title
                        </label>
                        <input type='text' name="newTitle" placeholder="Enter the title" className="form-control" role="inputTitle" value={this.state.newTitle} onChange={this.changeFun}/>
                        <small className="text-danger" data-testid="invalidTitle">
                            {this.state.newTitle.trim().length === 0?
                            "Title is required":""}
                        </small>
                    </div>
                    <div className="my-3">
                        <label className="form-label">
                            Description
                        </label>
                        <input type='text' name="newDescription" placeholder="Enter the description" className="form-control" role="inputDescription" value={this.state.newDescription} onChange={this.changeFun}/>
                        <small className="text-danger" data-testid="invalidDescription">
                            {this.state.newDescription.trim().length === 0?
                            "Description is required":""}
                        </small>  
                    </div>
                    <div className="my-3 w-50">
                        <label className="form-label">
                            Enter Topic
                        </label>
                        <input type='text' 
                        name="newTopic" 
                        placeholder="Enter the Topic" 
                        className="form-control" 
                        role="InputTopic" 
                        value={this.state.newTopic} 
                        onChange={this.changeFun}/>
                        <small className="text-danger" data-testid="invalidTopic">
                            {this.state.newTopic.trim().length === 0
                            && this.state.topicsArr.length === 0?
                            "Topic is required":""}
                        </small>  
                    </div>
                    <button className="btn btn-success addAlign" 
                    role="addTopicBtn"
                     onClick={this.topicFun}
                    disabled={this.state.newTopic.trim().length === 0 
                    }>
                        +Add Topic
                    </button>
                    <button className="btn btn-success submitAlign" role="submitAgendaBtn" onClick={this.agendaFun}
                    disabled={this.state.newTitle.trim().length === 0 ||
                        this.state.newDescription.trim().length === 0 ||
                        this.state.topicsArr.length === 0
                    }>
                        Submit Agenda
                    </button>
                </form>
                {this.state.topicsArr.length === 0 &&
                <div className="text-danger ml-2 mt-5" data-testid="noTopicsMsg">
                    No Topics Added
                </div>
                }
                {this.state.topicsArr.length !== 0 &&
                <div className="card my-3">
                    <div className="card-header">
                        Added Topics</div>
                        <div className="card-body">
                    <ul className="list-group">
                        {this.state.topicsArr.map(topic=>{
                            return(
                                <li className="list-group-item" role="topicList">
                                    {topic}
                                </li>
                            )
                        })}
                    </ul>
                    </div>
                    <div className="card-footer">
                        Refer the topics you Added
                        </div>
                </div>
                
                }
            </div>
            }
            {this.state.showAgendaBlock &&
            <div className="container" role="viewAgenda">
                <button className="btn btn-info" role="goToAdd"
                onClick={this.checkAgendaFun}>
                    Click To Add Agenda
                </button>
                { this.state.AddedAgenda.map(agenda=>{
                    return(
                        <div className="card my-3" role="cards">
                        <div className="card-header">
                            {agenda.title}
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                {agenda.topics.map(topic=>{
                                    requestAnimationFrame(
                                        <li className="list-group-item">
                                            {topic}
                                        </li>
                                    )
                                })}
                            </ul>
                            </div>
                            <div className="card-footer">
                                {agenda.description}
                                </div>
                        </div>

                    )
                })}

            </div>
            }
        </div>
    );
 }
}
export default App;
