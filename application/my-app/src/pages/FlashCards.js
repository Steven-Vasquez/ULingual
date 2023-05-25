import React, { useEffect, useState } from "react";
import Card from "./Card";
import './stylesheets/FlashCards.css'
import axios from "axios";


const FlashCards = () => {
    const [LearningLanguage, setLearning] = useState();
    const [flashcards, setFlashcards] = useState([]);
    const [creating, setCreating] = useState(false)
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const getUserInfo = () => {
        axios.post(`https://50.18.108.83.nip.io:3001/user/info`)
        // axios.post(`http://localhost:3001/user/info`)
        .then(res => {
            setLearning(res.data.LearningLanguage);
        })
    }

    const getFlashcards = () => {
        axios.post(`https://50.18.108.83.nip.io:3001/flashcards/display`)
        // axios.post(`http://localhost:3001/flashcards/display`)
        .then(res => {
            setFlashcards(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleCreate = (e) => {
        e.preventDefault();
        setCreating(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const allConditionsMet = (
            question.trim().length > 0 &&
            answer.trim().length > 0
        );

        if(allConditionsMet) {
            axios.post(`https://50.18.108.83.nip.io:3001/flashcards/create`, {
            // axios.post(`http://localhost:3001/flashcards/create`, {
                Question: question,
                Answer: answer
            })
            .then(res => {
            alert(res.data.message);
            setCreating(false);
            setQuestion("");
            setAnswer("");
            getFlashcards();
            })
            .catch(err => {
                console.error(err);
            })
        } else {
            alert("Both fields must be filled to create a flashcard.");
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setCreating(false);
        setQuestion("");
        setAnswer("");
    }

    useEffect(() => {
        getUserInfo();
        getFlashcards();
    }, []);

    return(
        <div className="flashcards-page">
            <h2>Flash Cards</h2>
            <h4>Click on Cards to see the translation!</h4>

                <label>{LearningLanguage} Flash Cards:</label>
                <div className="flashcards-container">
                    {flashcards.map(flashcard => (
                        <div key={flashcard.FlashcardID} className="spanish-cards">
                            <Card frontside = {flashcard.Question} backside = {flashcard.Answer}/>
                        {/* <Card frontside = 'Como estas' backside = 'How are you?'/>
                        <Card frontside = 'Me tengo que ir!' backside = 'I have to go!'/>
                        <Card frontside = 'Te amo!' backside = 'I love you!'/>
                        <Card frontside = 'Que paso' backside = 'Whats up?'/>
                        <Card frontside = 'Vamos!' backside = 'Lets Go!'/> */}
                        </div>
                    ))}
                </div>

                <div className="create-card">
                    {!creating ? (
                        <button onClick={(e) => handleCreate(e)}>
                            Create New Flashcard
                        </button>
                    ) : (
                        <div>
                            <div className="card-question">
                                Question: <input type="text" placeholder="Front side of card here..." onChange={(e) => setQuestion(e.target.value)}/>
                            </div>
                            <div className="card-answer">
                                Answer: <input type="text" placeholder="Back side of card here..." onChange={(e) => setAnswer(e.target.value)}/>
                            </div>
                            <button onClick={(e) => handleSubmit(e)}>Submit</button>
                            <button onClick={(e) => handleCancel(e)}>Cancel</button>
                        </div>
                    )}
                </div>
                {/* <label>French Flash Cards:</label>
                <div className="french-cards">
                    <Card frontside = 'Bonjour' backside = 'Hello'/>
                    <Card frontside = 'Au revoir' backside = 'Goodbye'/>
                    <Card frontside = 'Merci' backside = 'Thank you'/>
                    <Card frontside = 'Bonsoir' backside = 'Good evening'/>
                    <Card frontside = 'Comment allez-vous?' backside = 'How are you doing?'/>
                    <Card frontside = 'Je ne comprends pas' backside = 'I do not understand'/>
                </div>
        
                <label>Korean Flash Cards:</label>
                <div className="Korean-cards">
                    <Card frontside = '안녕하세요!' backside = 'Hello!'/>
                    <Card frontside ='이거 얼마예요?' backside = 'How much is this?'/>
                    <Card frontside ='이해 못했어요' backside = 'I dont understand'/>
                    <Card frontside ='사랑해' backside = ' I love you.'/>
                    <Card frontside ='진짜?' backside = 'Really?'/>
                    <Card frontside ='실례합니다' backside = 'Excuse me'/>
                </div>
          

       
                <label className="t-card">Arabic Flash Cards:</label>
                <div className="Arabic-cards">
                    <Card frontside = 'مرحبا' backside = 'Hi'/>
                    <Card frontside ='هو يدرس الآن' backside = 'He is studying'/>
                    <Card frontside ='كيف هو الطقس اليوم؟ ' backside = 'How is the weather today?'/>
                    <Card frontside ='كيف حالك الآن؟' backside = 'How are you today?'/>
                    <Card frontside ='ماذا أكلت اليوم؟' backside = 'What did you eat today?'/>
                    <Card frontside ='أنا عطشان' backside = 'I am thirsty.'/>
                </div> */}

        </div>

    );
}
export default FlashCards;