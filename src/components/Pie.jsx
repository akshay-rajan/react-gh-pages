import React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";


export default function Pie({ setInfo }) {

  const pieDiv = {
    flex: 3,
    width: '100%',
  };

  const data = [
    { 
      id: 0, 
      value: 33, 
      name: 'Software', 
      skills: [
        { name: 'Django', logo: "https://www.svgrepo.com/show/353657/django-icon.svg" },
        { name: 'React', logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-RS3Oeb0xs2q4aJmYZ4FGWnFuPnn4yFNHg&s" },
        { name: 'Python', logo: "https://i.pinimg.com/originals/2f/9c/11/2f9c11f9e55efbf1791f12c06d60729b.jpg" },
        { name: 'Java', logo: undefined },
        { name: 'JavaScript', logo: undefined },
        { name: 'C', logo: undefined },
        { name: 'PHP', logo: undefined },
        { name: 'Motoko', logo: undefined },
        { name: 'Rust', logo: undefined },
        { name: 'Anchor', logo: undefined },
        { name: 'Sass', logo: undefined },
        { name: 'TypeScript', logo: undefined },
        { name: 'SQL', logo: undefined },
        { name: 'MongoDB', logo: undefined },
        { name: 'MySQL', logo: undefined },
        { name: 'jQuery', logo: undefined },
        { name: 'XAMPP', logo: "" },
        { name: 'Bootstrap', logo: undefined },
        { name: 'Flask', logo: undefined },
        { name: 'Haskell', logo: undefined },
        { name: 'TypeScript', logo: undefined },
      ]
    },
    { 
      id: 1, 
      value: 33, 
      name: 'AI',
      skills: [
        { name: 'Machine Learning', logo: "https://e7.pngegg.com/pngimages/923/684/png-clipart-chatbot-artificial-intelligence-technology-machine-learning-technology-electronics-logo.png" },
        { name: 'Data Visualization', logo: "https://www.pngall.com/wp-content/uploads/10/Bar-Chart-Vector-PNG-Photo.png" },
        { name: 'Algorithms', logo: undefined },
        { name: 'numpy', logo: undefined },
        { name: 'pandas', logo: undefined },
        { name: 'matplotlib', logo: undefined },
        { name: 'seaborn', logo: undefined },
        { name: 'scikit-learn', logo: undefined },
        { name: 'Jupyter', logo: undefined },
      ],
    },
    { 
      id: 2, 
      value: 33, 
      name: 'DevOps',
      skills: [
        { name: 'Linux', logo: "https://seeklogo.com/images/L/Linux_Tux-logo-DA252F3C21-seeklogo.com.png" },
        { name: 'Docker', logo: "https://static-00.iconduck.com/assets.00/docker-icon-2048x2048-7f7e4npz.png" },
        { name: 'Git', logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
        { name: 'VirtualBox', logo: undefined },
        { name: 'Nginx', logo: undefined },
        { name: 'Ansible', logo: undefined },
        { name: 'Wireshark', logo: undefined },
        { name: 'Postman', logo: undefined },
        { name: 'Networking', logo: undefined },
      ],
    },
  ];
  
  return (
    <div style={window.innerWidth < 798 ? {display: 'flex', justifyContent: 'center' , alignItems: 'center'} : pieDiv}>
      <PieChart
        colors={['wheat', '#ffccff', '#ccffff']}
        series={[
            {
            data,
            paddingAngle: 5,
            innerRadius: 50,
            cornerRadius: 5,
            startAngle: 0,
            endAngle: 360,
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
        height={330}
        onHighlightChange={(item) => {
          if (item) {
            setInfo(data[item.dataIndex].skills);
          } 
        }}
      />
  </div>
  );
}

