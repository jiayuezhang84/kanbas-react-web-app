export default function Modules() {
    const modulesData = [
        {
            week: "Week 1",
            lessons: [{ title: "LEARNING OBJECTIVES", content: ["Introduction to the course", "Learn what is Web Development"] },
            { title: "READING", content: ["Full Stack Developer - Chapter 1", "Full Stack Developer - Chapter 2"] },
            { title: "SLIDE", content: ["Intro to Web Development", "Creating a React App"] }]
        },
        {
            week: "Week 2",
            lessons: [{title: "LEARNING OBJECTIVES", content: ["CSS Styling, Bootstrap"]},
            {title: "READINGS", content: ["Full Stack Developer - Chapter 3"]},
            {title: "SLIDES", content: ["Intro to HTML"]},]
        },
        {
            week: "Week 3",
            lessons: [{title: "LEARNING OBJECTIVES", content: ["Ndoe", "Client/ Server"]}]
        },
        {
            week: "Week 4",
            lessons: [{title: "LEARNING OBJECTIVES", content: ["MongoDB", "Database"]}]
        },
        {
            week: "Week 5",
            lessons: [{title: "LEARNING OBJECTIVES", content: ["Third Party API", "Integrating with Napter"]}]
        }
    ];

    return (
        <div>
            <div>
                <button>Collapse All</button>
                <button>View Progress</button>
                <select id="wd-publish">
                    <option selected value="publish">Publish</option>
                    <option value="hide">Hide</option>
                </select>
                <button>+ Modules</button>
            </div>

            <ul id="wd-modules">
                {modulesData.map((module, index) => (
                    <li className="wd-module" key={index}>
                        <div className="wd-title">{module.week}</div>
                        <ul className="wd-lessons">
                            {module.lessons.map((lesson, index) => (
                                <li className="wd-lesson" key={index}>
                                    <span className="wd-title">{lesson.title}</span>
                                    {lesson.content.length > 0 && (
                                        <ul className="wd-content">
                                            {lesson.content.map((item, index) => (
                                                <li className="wd-content-item" key={index}>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}
