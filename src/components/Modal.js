import React from 'react'
import { Link } from 'react-router-dom'

export const Modal = () => (
  <div id="modal1" className="modal">
    <div className="modal-content">
      <h4>Love, Love Me Do: A True Valentine Love Story</h4>
      <p>A British man and his Spanish former love have finally married 16 years 
      after they drifted apart, reunited by a love letter lost behind a fireplace for 
      over a decade, Will and Guy have discovered. Steve Smith and Carmen Ruiz-Perez, both now 42, fell in love 17 years ago when she was a foreign exchange student in Brixham, southwest England, and got engaged after only a year together. 
      Their relationship ended after she moved France to run a shop in Paris.</p>
      <p>'When I got the letter I knew I had to make the call,' Ruiz-Perez said. 
      'When we met again it was like a film. We met up and fell in love all over again.'. 
      'I'm just glad the letter did eventually end up where it was supposed to be,' 
      Smith said, after the couple married last Friday. Those words hurt worse than blows. 
      I turned my head toward the elderly man in the seat beside me, daring me to challenge him. A lump rose in my throat as I averted my eyes. 
      I wasn't prepared for another battle.</p>      
    </div>
    <div className="modal-footer">
      <Link to="#!" className="modal-close waves-effect waves-green btn-flat">Close</Link>
    </div>
  </div>
)
