import React from 'react'
import { v4 as uuid  } from 'uuid';

function SessionID(){
    const unique_id = uuid();
    return(
    //     <div className="form-group">
    //     <label>SessionId</label>
    //      <select className="form-control">
    //           <option>{unique_id}</option>
    //      </select>

    //   </div> 
    <p>{unique_id} </p>
    )
}

export default React.memo(SessionID)
