import axios from "axios";
const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const tabsDiv = document.createElement("div");
  tabsDiv.classList.add("topics");
  let tabsElem = topics.map((elem) => {
    const tabsDiv123 = document.createElement("div");
    tabsDiv123.classList.add("tab");
    tabsDiv123.textContent = elem;
    return tabsDiv;
  });
  tabsElem.forEach((elem) => {
    tabsDiv.appendChild(elem);
  });
  return tabsDiv;
};

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const entryPoint = document.querySelector(selector);
  axios.get("http://localhost:5001/api/topics").then((res) => {
    let topic = res.data.topics;
    let tabs = Tabs(topic);
    entryPoint.appendChild(tabs);
  });
};

export { Tabs, tabsAppender };
