import React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

export default function Pie({ setInfo }) {

  const pieDiv = {
    // flex: 3,
    width: '100%',
  };

  const data = [
    { 
      id: 0, 
      value: 33, 
      name: 'Software', 
      skills: ['Django', 'React', 'Python', 'Java', 'JavaScript', 'C', 'PHP', 'Motoko', 'Rust', 'Anchor', 'Sass', 'TypeScript', 'SQL', 'MongoDB', 'MySQL', 'Flask', 'jQuery', 'XAMPP', 'Bootstrap', 'Flask', 'Haskell', 'TypeScript']
    },
    { 
      id: 1, 
      value: 33, 
      name: 'AI',
      skills: ['Machine Learning', 'Data Visualization', 'Algorithms', 'numpy', 'pandas', 'matplotlib', 'seaborn', 'scikit-learn', 'Jupyter', 'Excel'],
    },
    { 
      id: 2, 
      value: 33, 
      name: 'DevOps',
      skills: ['Ansible', 'Docker', 'Linux', 'Wireshark', 'Postman', 'Git', 'VirtualBox', 'Nginx', 'Networking'],
    },
  ];
  
  return (
    <div style={pieDiv}>
      <PieChart
        colors={['wheat', '#ffccff', '#ccffff']}
        series={[
            {
            data,
            paddingAngle: 5,
            innerRadius: 50,
            cornerRadius: 5,
            startAngle: 0 - 60,
            endAngle: 360 + 60,
            arcLabel: (item) => `${item.name}`,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            },
        ]}
        sx={{
            [`& .${pieArcLabelClasses.root}`]: {
            fill: 'black',
            fontSize: 12,
            fontWeight: 'bold',
            },
        }}
        tooltip={{ enabled: false }}
        height={300}
        onItemClick={(event, item) => {
          if (item) {
            setInfo(item.dataIndex);
          } else {
            setInfo("");
          }
          console.log(event, item);
        }}
        onHighlightChange={(item) => {
          setInfo("");
          if (item) {
            setInfo(item.dataIndex);
          } else {
          }
        }}
      />
  </div>
  );
}

