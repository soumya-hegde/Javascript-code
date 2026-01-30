import "./styles.css";
import { ColumnChart, PieChart } from "react-chartkick";
import "chartkick/chart.js";

export default function App() {
    const projects = [
        {
            id: 1,
            name: "Website Redesign",
            client: "Acme Corp",
            startDate: "2025-01-15",
            status: "In Progress",
        },
        {
            id: 2,
            name: "Mobile App Development",
            client: "TechNova Solutions",
            startDate: "2025-02-10",
            status: "Completed",
        },
        {
            id: 3,
            name: "E-commerce Platform",
            client: "Global Retail Ltd",
            startDate: "2025-03-05",
            status: "Pending",
        },
    ];
    const tasks = [
        {
            id: 103,
            projectId: 1,
            title: "Implement responsive layout",
            status: "Pending",
        },
        {
            id: 201,
            projectId: 2,
            title: "Set up mobile backend API",
            status: "Completed",
        },
        {
            id: 301,
            projectId: 3,
            title: "Create product catalog module",
            status: "In Progress",
        },
        {
            id: 202,
            projectId: 2,
            title: "Develop user authentication",
            status: "Completed",
        },
        { id: 102, projectId: 1, title: "Design mockups", status: "In Progress" },
        {
            id: 303,
            projectId: 3,
            title: "Set up order tracking system",
            status: "Pending",
        },
        {
            id: 203,
            projectId: 2,
            title: "App store submission",
            status: "Completed",
        },
        {
            id: 101,
            projectId: 1,
            title: "Gather requirements",
            status: "Completed",
        },
        {
            id: 302,
            projectId: 3,
            title: "Integrate payment gateway",
            status: "Pending",
        },
    ];
    //one way---
    // function statusFrequency(tasks) {
    //   const res = {};
    //   for (let ele of tasks) {
    //     if (ele.status in res) {
    //       res[ele.status] += 1;
    //     } else {
    //       res[ele.status] = 1;
    //     }
    //   }
    //   return res;
    // }

    // const frequency = statusFrequency(tasks);
    // console.log(frequency);

    const frequency = {};
    for (let ele of tasks) {
        const { status } = ele; //object destructure
        if (ele.status in frequency) {
            frequency[status] += 1;
        } else {
            frequency[status] = 1;
        }
    }
    const chartData = Object.entries(frequency);

    return (
        <div className="App">
            <h1>My Project</h1>
            <h2>Listing projects - {projects.length}</h2>
            <ul>
                {projects.map((ele) => {
                    return <li>{ele.name}</li>;
                })}
            </ul>
            <h2>Full project Details:</h2>
            <table border="1">
                <tr style={{ color: "red" }}>
                    <th>Name</th>
                    <th>Client</th>
                    <th>Status</th>
                    <th>Start Date</th>
                </tr>
                {projects.map((ele) => {
                    return (
                        <tr style={{ color: "Blue" }}>
                            <td>{ele.name}</td>
                            <td>{ele.client}</td>
                            <td>{ele.status}</td>
                            <td>{ele.startDate}</td>
                        </tr>
                    );
                })}
            </table>

            <h2>Total Tasks- {tasks.length}</h2>
            <ul>
                {tasks.map((ele) => {
                    return <li>{ele.title}</li>;
                })}
            </ul>

            <h2>Statistics:</h2>
            <ColumnChart data={chartData} />
            <PieChart data={chartData} />
            {/* <ul>
        {Object.entries(frequency).map((ele) => {
          return (
            <li>
              {ele[0]} - {ele[1]}
            </li>
          );
        })}
      </ul> */}

            <ul>
                {Object.entries(frequency).map(([key, value]) => {
                    return (
                        <li>
                            {key} - {value}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

//jsx - Javascript XML - HTML Like code but not HTML
//embed expression inside jsx using { }
//datatypes not printed on UI in React - undefined, boolean[true and false]
// can print true /false as a string = {'true'}
