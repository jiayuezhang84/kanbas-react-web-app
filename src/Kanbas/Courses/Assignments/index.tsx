import AssignmentControl from './AssignmentControl'
import ItemControlButton from './ItemControlButton';
import AssignmentButton from './AssignmentButton';

interface Item {
  id: number;
  title: string;
  details: string;
}

interface ItemListProps {
  items: Item[];
  title: string;
  itemType: string;
}

function ItemList({ items, title, itemType }: ItemListProps) {
    function formatDetails(details: string | undefined): { __html: string } {
      if (!details) return { __html: "" };
  
      const formattedDetails = details.replace(/(Not Available until|Due)/g, '<strong>$1</strong>');
      return { __html: formattedDetails };
    }
  
    return (
      <div className="list-group rounded-0">
        <div className="list-group-item p-0 mb-5 fs-5 border-gray">
          <div className={`wd-title p-3 ps-2 bg-secondary`}>
            {title}  {/* Place the title in the header position like module.week */}
            <ItemControlButton />
          </div>
          <ul>
            {items.map((item: any, index: any) => (
              <li key={index} className="list-group-item p-0 mb-1 fs-5 border-gray">
                <div className="p-3 ps-2">
                  <a className={`wd-${itemType}-link`}
                    href={`#/Kanbas/Courses/1234/assignments/${item.title}`}>
                    {item.title}
                  </a>
                  <AssignmentButton />
                  <div dangerouslySetInnerHTML={formatDetails(item.details)} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default function Assignments() {
    const assignments = [
        { id: 111, title: "A1 - ENV + HTML", details: "Multiple Modules | Not Available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts" },
        { id: 112, title: "A2 - CSS and Bootstrap", details: "Multiple Modules | Not Available until May 22 at 12:00am | Due May 13 at 11:59pm | 100 pts" },
        { id: 113, title: "A3 - JavaScript & React", details: "Multiple Modules | Not Available until June 5 at 12:00am | Due May 13 at 11:59pm | 100 pts" },
        { id: 114, title: "A4 - State & Redux", details: "Multiple Modules | Not Available until June 19 at 12:00am | Due May 13 at 11:59pm | 100 pts" },
        { id: 115, title: "A5 - Node", details: "Multiple Modules | Not Available until July 17 at 12:00am | Due May 13 at 11:59pm | 100 pts" },
        { id: 116, title: "A6 - MangoDB", details: "Multiple Modules | Not Available until July 31 at 12:00am | Due May 13 at 11:59pm | 100 pts" },
    ];
  
    const quizzes = [
        { id: 121, title: "Q1", details: "Multiple Modules | Not Available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts" },
        { id: 122, title: "Q2", details: "Multiple Modules | Not Available until May 22 at 12:00am | Due June 1 at 11:59pm | 100 pts" },
        { id: 123, title: "Q3", details: "Multiple Modules | Not Available until June 5 at 12:00am | Due June 13 at 11:59pm | 100 pts" },
        { id: 124, title: "Q4", details: "Multiple Modules | Not Available until June 19 at 12:00am | Due July 1 at 11:59pm | 100 pts" },
        { id: 125, title: "Q5", details: "Multiple Modules | Not Available until July 17 at 12:00am | Due July 13 at 11:59pm | 100 pts" },
        { id: 126, title: "Q6", details: "Multiple Modules | Not Available until July 31 at 12:00am | Due August 13 at 11:59pm | 100 pts" },
    ];
  
    const exams = [
      { id: 131, title: "X1", details: "Multiple Modules | Not Available until May 6 at 12:00am | Due June 26 at 11:59pm | 100 pts" },
      { id: 132, title: "X2", details: "Multiple Modules | Not Available until May 22 at 12:00am | Due August 13 at 11:59pm | 100 pts" },
  ];
  
  const projects = [
    { id: 141, title: "P1", details: "Multiple Modules | Not Available until May 6 at 12:00am | Due August 13 at 11:59pm | 100 pts" }
  ];
  
    return (
      <div id="modulesContainer">
        <div>
          <AssignmentControl /><br /><br /><br /><br />
        </div>
        <ItemList items={assignments} title="ASSIGNMENTS 40% of Total" itemType="assignments" />
        <ItemList items={quizzes} title="Quizzes 10% of Total" itemType="quizzes" />
        <ItemList items={projects} title="Project 30% of Total" itemType="project" />
        <ItemList items={exams} title="Exam 20% of Total" itemType="exam" />
      </div>
    );
  }
  