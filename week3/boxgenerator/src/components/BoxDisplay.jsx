import React from 'react'

const BoxDisplay = (props) => {

    const { boxArray } = props;

  return (
    <div>
        {
            boxArray.map((boxColor, index) => 
                <div key={index} style = {{
                    display: "inline-block",
                    height: "100px",
                    width: "100px",
                    backgroundColor: boxColor,
                    margin: "5px"
                    }}>
                </div>
            )
        }

    </div>
  )
}

export default BoxDisplay