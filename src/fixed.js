export const numbersOfExp = [{
    name: 'Years of experience',
    count: 1
}, {
    name: 'Projects',
    count: 10
}, {
    name: 'Technologies',
    count: 20
}

]

const path = `http://localhost:3000`;

export const expTimeline = [{
    startDate: "Jun 2023",
    endDate: "now",
    expName: "Design Verification Internship",
    companyName: "An-Najah Company For Consultancy & Technical Studies",
    Description: "We started our training by learning how to write RTL designs, and testing them using the simple testbench. Then we moved to learn the"
    +" System Verilog, and how we can use it to test our designs. After all of this, we studying about scripting by python, and how it can"
    +" help us to write RTL designs, then convert these designs into Verilog, or VHDL. Then, we learned how to use VCS tool for testing and coverage our designs, and how to extract the netlist file using this tool. Finally, We have been starting by UVM framwork.",
    urlFile: null
},
{
    startDate: "Oct 2022",
    endDate: "Mar 2023",
    expName: "Frontend Development Internship",
    companyName: "Foothill Technology Solutions, LLC.",
    Description: "In this internship, we studied about HTML, CSS, JavaScript, TypeScript, DOM, React, Redux, React Routing and React testing..",
    urlFile: `${path}/intern.png`

}
,
{
    startDate: "Jan 2022",
    endDate: "Dec 2022",
    expName: "Full Stack Development Diploma",
    companyName: "Knowledge Academy",
    Description: "We studied about HTML, CSS, JavaScript, Bootstrap, DOM, JQuery, React, React Routing",
    urlFile: `${path}/course.jpg`
}
]; 


export const downloadMyCV = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
}


export const eduTimeline = [{
    startDate: "Aug 2018",
    endDate: "Jun 2023",
    degree: "B.Sc degree in Computer Engineering",
    grade: "3.29/4",
    learningCenter: "An-Najah National University",
    city: "Nablus", 
    thumbnail: `${path}/nnu.jpg`, 
},
{
    startDate: "Aug 2017",
    endDate: "Jun 2018",
    degree: "High School Certificate - Scientific Stream",
    grade: "93.6%",
    learningCenter: "King Talal Secondary School",
    city: "Nablus", 
    thumbnail: `${path}/school.jpg`, 

}

]; 


export const projectsInformation = [
    {
        projectName: "POS",
        startDate: "Feb 2023", 
        endDate : "Mar 2023", 
        youtubeLink: "https://www.youtube.com/watch?v=x2oOS-o8Cd8", 
        githubLink: "https://github.com/EzzAddinKukhun/POS", 
        thumbnail: `${path}/pos.png`, 
        frontendTech: ["HTML", "CSS", "Typescript", "Bootstrap", "React", "Redux", "React MUI"], 
        backendTech: ["NodeJS, MySQL"], 
        description: "It represents a point of sale system, which I called it (MyCart), it consists of two sides, admin which will be responsible to add,delete,update,get products and categories and search in them. The other side is the user side, which represents the cashier, he will be able to show all products , and filter them base on category, or search in them, and he can create multiple carts, and checkout them."
    },
    {
        projectName: "Alumni",
        startDate: "Aug 2022", 
        endDate : "Jan 2023", 
        youtubeLink: "https://drive.google.com/file/d/1o8mG_TjuEQWgpNnvlTPu-x4kl8Bhsyro/view", 
        githubLink: "https://github.com/EzzAddinKukhun/Graduation_Project_1", 
        thumbnail: `${path}/alumni.jpg`, 
        frontendTech: ["HTML", "CSS", "Javascript", "Bootstrap", "React"], 
        backendTech: ["NodeJS, expressJS, mongoDB"], 
        description: "This is the graduation project, it focuses mainly on how we can offer jobs, internships, scholarships for alumni, or students who will be graduate through gathering organizations and universities in our platform. The project consists of two platforms, web for all roles, and mobile for user only"
    },
    {
        projectName: "Maktabati",
        startDate: "Sep 2022", 
        endDate : "Oct 2022", 
        youtubeLink: "https://www.youtube.com/watch?v=fSXRrcLIGnE", 
        githubLink: "https://github.com/EzzAddinKukhun/Maktabati", 
        thumbnail: `${path}/maktabati.jpg`, 
        frontendTech: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"], 
        backendTech: [], 
        description: "It is a simple website which displays the books through the Google API book. The user also can search about any book through the API, and he can see some important information about each book."
    },
    {
        projectName: "Elegant Clothes",
        startDate: "Jun 2022", 
        endDate : "Jul 2023", 
        youtubeLink: "https://youtu.be/O1QGWXb8MrE", 
        githubLink: "https://github.com/EzzAddinKukhun/Elegant-Clothes", 
        thumbnail: `${path}/clothes.jpg`, 
        frontendTech: ["HTML", "CSS", "JavaScript", "Bootstrap"], 
        backendTech: [], 
        description: "It represents a clothes store which called Elegant. It consists of two sides, customer side who has an ability to buy different clothes and watches, and admin side who can add, delete, edit the products. "
    },
    {
        projectName: "Mobile Market",
        startDate: "Mar 2022", 
        endDate : "", 
        youtubeLink: "https://youtu.be/7Nbeoux1PQg", 
        githubLink: "https://github.com/EzzAddinKukhun/Mobile-Market", 
        thumbnail: `${path}/mobile.png`, 
        frontendTech: ["HTML", "CSS"], 
        backendTech: [], 
        description: "It represents just a simple responsive page for viewing different mobile devices from different companies."
    },
    {
        projectName: "Android Market",
        startDate: "Mar 2021", 
        endDate : "May 2021", 
        youtubeLink: "https://youtu.be/O1tMvyGDvEo", 
        githubLink: "", 
        thumbnail: `${path}/android.jpg`, 
        frontendTech: ["HTML", "CSS", "JavaScript", "JQuery", "Ajax"], 
        backendTech: ["Php, MySQL"], 
        description: "It is a simple website which display Android devices from several companies. It consists of admin who has an ability to add new devices to users ,reply to purchases orders , and display statistics about purchases, sales and phones in the market. Also, it consists of user who can buy new products ,contact with admin , and display all phones . "
    }
]
