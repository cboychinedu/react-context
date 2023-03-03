import React from 'react'
import { Pagination } from 'semantic-ui-react'
import "../App.css"; 

// Creating the pagnation UI component 
const PaginationExampleCompact = () => (
  <Pagination
    style={{float: 'right', marginTop: '30px', marginLeft: '10px'}}
    boundaryRange={0}
    defaultActivePage={1}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    totalPages={10}
  />
)

// Exporting 
export default PaginationExampleCompact; 