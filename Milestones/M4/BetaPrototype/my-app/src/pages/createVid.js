import React from "react";

import './stylesheets/CreateVideo.css'

const CreateVid = ()  => {
    return(
        <div className="create-pg">
            <h2>Create a Video Room ID</h2>
                <div className="create-id-pg">
                    <form className="create-id-form">
                    
                        <button type="submit" className="button">
                             Generate ID!
                        </button>

                    </form>


                </div>
        </div>
    );
}
export default CreateVid;