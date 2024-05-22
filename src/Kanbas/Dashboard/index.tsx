export default function Dashboard() {

    const courses = [
        { id: 5610, name: "CS5610 Web Development", description: "Web Development", image: "./images/react.png"},
        { id: 5001, name: "CS5001 Intro to Python", description: "Python Program Design", image: "./images/python.jpeg"},
        { id: 5002, name: "CS5002 Discrete Math", description: "Mathematical structures that are countable or otherwise distinct and separable", image: "./images/math.jpeg" },
        { id: 5003, name: "CS5003 Data Structure", description: "How data can be stored in different structures", image: "./images/structure.jpeg" },
        { id: 5004, name: "CS5004 Object Oriented Design", description: "A computer programming model that organizes software design around objects.", image: "./images/oop.jpeg" },
        { id: 5005, name: "CS5005 Computer Networking", description: "A limited-function desktop computer that is designed to easily connect to networks.", image:"./images/compnet.jpeg" },
        { id: 5006, name: "CS5006 Compiler", description: "How to convert the source code to the object code", image: "./images/compiler.jpeg" },
    ];

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            {courses.map((course) => (
                <div key={course.id} className="wd-dashboard-course">
                    <img src={course.image} width={200} height={150} alt=""/>
                    <div>
                        <a className="wd-dashboard-course-link" href={`#/Kanbas/Courses/${course.id}/Home`}>
                            {course.name}
                        </a>
                        <p className="wd-dashboard-course-title">
                            {course.description}
                        </p>
                        <a href={`#/Kanbas/Courses/${course.id}/Home`}>Go</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

