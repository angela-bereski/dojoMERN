import React from 'react'

const Tabs = ({tabs, setTabs, shownTab, setShownTab}) => {

const ShowThisTab = (index) => {
    setShownTab(index)
}

return (
    <div>
        <div className = "d-flex justify-content-center">
            {
                tabs.map((obj, index) => (
                    <h2 className="bg-info p-2 m-2 justify-content-center" ><span onClick={(e) => ShowThisTab(index)}>{obj.header}</span></h2>
                ))
            }
        </div>
        <div className="border border-info col-4 mx-auto p-2 bg-dark">
            <h4 className="text-white">{tabs[shownTab].content}</h4>
        </div>
    </div>
)
}

export default Tabs