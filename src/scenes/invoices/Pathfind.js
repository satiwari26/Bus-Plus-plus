import React, {useState, useEffect} from 'react';

const cols = 5;
const rows = 5;

const Pathfind =() => {
    const [Grid,setGrid] = useState([]);

    const initializeGrid = () =>{
        const grid = new Array(cols);

        for (let i=0;i<cols;i++){
            grid[i] = new Array(rows);
        }

        for(let i =0; i<cols;i++){
            for(let j =0;j<rows;j++){
                //grid[i][j] = new Spot(i,j);
            }
        }
    }

    
  return (
    <div>
    <h1>Pathfind</h1>
    </div>
  )
}

export default Pathfind