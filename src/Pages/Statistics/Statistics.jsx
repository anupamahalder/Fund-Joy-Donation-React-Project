import { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
const Statistics = () => {
    // declare a state to store the percentage of donations that already donated
    const [donate, setDonate] = useState(0);
    useEffect(()=>{
        // getting data from localStorage 
        let totalLocalData = JSON.parse(localStorage.getItem('donationList')).length;
        totalLocalData = (totalLocalData/12)*100;
        console.log(totalLocalData); 
        setDonate(totalLocalData);
    },[]);
    //create data for piechart
    const myData = [
        {name:"Your Donation",value:donate, color:"#FF444A"},
        {name:"Total Donation",value:(100-donate), color: "#00C49F"}
    ]
    // color data 
    const myColor = ["#FF444A","#00C49F"];
    return (
        <div className="flex justify-center items-center my-20">
            <div style={{ width: "100%", height: 300 }} className="my-10">
      <ResponsiveContainer>
        <PieChart>

          <Pie dataKey="value" data={myData} label>
            {myData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          
        </PieChart>
      </ResponsiveContainer>
      <div className="my-10" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {myData.map((item) => (
          <p>
            {" "}
            <span
              style={{ padding: "1px 30px ", backgroundColor: item.color }}
            ></span>{" "}
            {item.name}
          </p>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Statistics;