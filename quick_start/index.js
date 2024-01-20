const { createRoot } = ReactDOM;

const dayNamesvalue = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function HelloWorld() {
  return (
    <div className="container">
      <h1>Hello World!</h1>
      <Lunar />
      <WeekNameList />
    </div>
  );
}

function Lunar() {
  return <h1>Hello Lunar!</h1>;
}

function WeekNameList() {
  /*
    let optionElement = document.querySelector("#week-name-list");
    optionElement.options.add(new Option("Please Select", ""));

    dayNamesvalue.forEach((e, i) => {
      optionElement.options.add(new Option(dayNamesvalue[i], e));
    }); 
    */

  dayNamesvalue.map((e, i) => {
    console.log(e);
  });

  return (
    <div classname="select-tag-element">
      <select value={""} name="week-name-list" id="week-name-list">
        <option value="">Please Select</option>
        <option value="Sunday">Sunday</option>
      </select>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<HelloWorld />);
