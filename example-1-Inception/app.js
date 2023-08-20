const h1 = React.createElement("h1",{className:"heading"},"hello world");
const p = React.createElement("p",{},"welcome to website");
const div = React.createElement("div",{
    className:"container"
},React.createElement("div",{
    className:"box"
},[h1,p])); // create js object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div); // we are passing here React Element
// React Element at the end of the what an object and this React Obect become HtMl that the browser understaand



       
  


