import "./styles.css";

export default function App() {
    const names = [
        "Javascript",
        "Express",
        "MongoDB",
        "Node JS",
        "React JS",
        "Java",
        "SpringBoot",
    ];
    const colors = ["red", "yellow", "blue", "black"];
    /* const liTags = names
      .sort()
      .reverse()
      .map((ele) => {
        return <li>{ele}</li>;
      }); //str -> jsx
    const result = [];
    for (let i = 0; i < names.length; i++) {
      result.push(<li>{names[i]}</li>);
    }*/
    return (
        <div className="App">
            <h1>Hello World!</h1>
            <h2>Listing Technologies: {names.length}</h2>

            <ul>
                {names.map((ele) => {
                    return <li>{ele}</li>;
                })}
            </ul>
            <h2>Total Colors : {colors.length}</h2>
            <ul>
                {colors.map((ele) => {
                    return (
                        <li style={{ color: ele }}>
                            {ele.charAt(0).toUpperCase()}
                            {ele.slice(1)}
                        </li>
                    );
                })}
            </ul>
            {/* <ul>{liTags}</ul> */}
            <hr />
            {/* <ul>{result}</ul> */}
        </div>
    );
}

//jsx - Javascript XML - HTML Like code but not HTML
//embed expression inside jsx using { }
//datatypes not printed on UI in React - undefined, boolean[true and false]
// can print true /false as a string = {'true'}

/*const names = [
  "Javascript",
  "Express",
  "MongoDB",
  "Node JS",
  "React JS",
  "Java",
];
//const result = names.map((ele) => ele.toUpperCase());
//onsole.log(result);

const res = [];
for (let i = 0; i < names.length; i++) {
  res.push(names[i].toUpperCase());
}
console.log(res);*/
