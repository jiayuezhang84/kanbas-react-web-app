import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { modules } from '../../Database';

export default function Modules() {
    return (
        <div id="modulesContainer">
            <ModulesControls /><br /><br /><br /><br />
            <ul className="list-group rounded-0">
                {modules.map((module, index) => (
                    <li key={index} className="list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            {module.name} 
                            <ModuleControlButtons />
                        </div>
                        <ul className="wd-lessons list-group rounded-0">
                            {module.lessons?.map((lesson, lessonIndex) => (
                                <li key={lessonIndex} className="wd-lesson list-group-item p-3 ps-1">
                                    <BsGripVertical className="me-2 fs-3" />
                                    {lesson.name} 
                                    <LessonControlButtons />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}
