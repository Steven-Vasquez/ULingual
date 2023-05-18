import React from "react";
import Card from "./Card";
import './stylesheets/FlashCards.css'


const FlashCards = () => {
    return(
        <div className="flashcards-page">
            <h2>Flash Cards</h2>
            <h4>Click on Cards to see the translation!</h4>

                <label>Spanish Flash Cards:</label>
                <div className="spanish-cards">
                    <Card frontside = 'Hola' backside = 'Hello'/>
                    <Card frontside = 'Como estas' backside = 'How are you?'/>
                    <Card frontside = 'Me tengo que ir!' backside = 'I have to go!'/>
                    <Card frontside = 'Te amo!' backside = 'I love you!'/>
                    <Card frontside = 'Que paso' backside = 'Whats up?'/>
                    <Card frontside = 'Vamos!' backside = 'Lets Go!'/>
                </div>
          
                <label>French Flash Cards:</label>
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
                    <Card frontside ='ماذا أكلت اليوم؟ ' backside = 'What did you eat today?'/>
                    <Card frontside ='أنا عطشان' backside = 'I am thirsty.'/>
                </div>

           
        </div>

    );
}
export default FlashCards;