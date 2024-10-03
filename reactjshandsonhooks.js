import React, { useState } from "react";
function App() {

    const [newTitle, setNewTitle] = useState("") 
    const [newDescription, setNewDescription] =useState("")
    const [newTopic, setNewTopic] = useState("") 
    const [addedAgenda, setAddedAgenda] = useState([
        {
            title: "Angular",
            description: "Some description about the angular",
            topics: ["Introduction", "Typescript", "Why Angular?", "Understanding Versions", "Fundamentals"]
        },
        {
            title: "Vue",
        description: "Some description about the vue",
            topics: ["Introduction", "Javascript", "Why Vue?", "Vue Bindings", "Component Interaction"]
        }
    ]);
    const [topicsArr, setTopicsArr] = useState([])
    const [showAgendaBlock, setShowAgendaBlock] = useState(false)
    
    const chaneFun = e => {
        const { value, name } = e.target; 
        switch (name) {
            case "newTitle": setNewTitle(value)
                break;
            case "newDescription":
                setNewDescription(value)
                break;
            case "newTopic":
                setNewTopic(value) 
                break;
            default:
                break;
        }
    }
    
const topicFun = () =>{ 
    if (newTopic.trim() !== "") 
    {
    setTopicsArr(prevTopicsArr => [...prevTopicsArr, newTopic]);
    setNewTopic("")
    }
}

const agendaFun = () => {
    if (newTitle.trim() !== "" && newDescription.trim() !== "" && topicsArr.length > 0) 
    { 
    const agenda = {
                    title: newTitle,
                    description: newDescription,
                    topics: topicsArr
                    };
    
    setAddedAgenda (prevAddedAgenda => [...prevAddedAgenda, agenda]);
    setNewTitle("")
    setNewDescription("") 
    setNewTopic ("") 
    setTopicsArr([])
    }
}
const formCheck = e => { e.preventDefault()
}

const checkAgendaFun=() => {
setShowAgendaBlock (prevShowAgendaBlock => !prevShowAgendaBlock)
}

return (
    <div>
        <h1 className="container" role="addAgenda">
            <button className="btn btn-info" role="goToView"
            onClick={checkAgendaFun}>
                Click To View Agenda
            </button>
        </h1>
        <form onSubmit={formCheck}>
            <div className="my-3">
                <label className="form-label">
                    Title
                </label>
                <input 
                type="text" 
                name="newTitle" 
                placeholder="Enter the title" 
                className="'form-control"
                role="inputTitle"
                value={newTitle}
                onChange={chaneFun}
                />
            
            </div>
        </form>
    </div>
)
}