import{r as a,j as e,N as c}from"./index-fhPfTF3h.js";import{D as l,R as d}from"./RightNav-DHu8uImM.js";import{S as x}from"./Sidebar-CzaO_V6i.js";import{w as u}from"./index-BQ_KrB9q.js";const h=[{title:"Component",href:"/reference/component"},{title:"Hooks",href:"/reference/hooks"},{title:"Context",href:"/reference/context"}],s=[{id:"intro",label:"What is Context?"},{id:"when-use",label:"When to Use Context"},{id:"creating",label:"Creating Context"},{id:"using",label:"Using Context"},{id:"example",label:"Full Example"}];function f(){return a.useEffect(()=>{const r=new IntersectionObserver(n=>{n.forEach(t=>{const i=t.target.getAttribute("id"),o=document.querySelector(`a[href="#${i}"]`);o&&(t.isIntersecting?o.classList.add("text-indigo-600","font-semibold"):o.classList.remove("text-indigo-600","font-semibold"))})},{rootMargin:"0px 0px -70% 0px"});return s.forEach(n=>{const t=document.getElementById(n.id);t&&r.observe(t)}),()=>r.disconnect()},[]),e.jsx(l,{sidebar:e.jsx(x,{title:"Reference",sections:h}),rightnav:e.jsx(d,{headings:s}),children:e.jsxs("div",{className:"prose dark:prose-invert max-w-4xl space-y-8",children:[e.jsxs("h1",{id:"intro",className:"text-3xl font-bold text-gray-900 dark:text-white",children:["Understanding ",e.jsx("span",{className:"text-indigo-600",children:"Context"})," in React"]}),e.jsxs("p",{children:["The ",e.jsx("span",{className:"font-semibold text-indigo-600",children:"Context API"})," ","provides a way to pass data through the component tree without having to pass props down manually at every level."]}),e.jsx("h2",{id:"when-use",className:"text-2xl font-semibold",children:"When to Use Context"}),e.jsx("p",{children:'Use context when you need to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.'}),e.jsxs("ul",{className:"list-disc list-inside text-gray-700 dark:text-gray-300",children:[e.jsx("li",{children:"Current authenticated user"}),e.jsx("li",{children:"UI theme (light/dark)"}),e.jsx("li",{children:"Localization settings"})]}),e.jsx("h2",{id:"creating",className:"text-2xl font-semibold",children:"Creating a Context"}),e.jsxs("p",{children:["Use ",e.jsx("code",{children:"React.createContext()"})," to create a context object."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm",children:e.jsx("code",{children:"const ThemeContext = React.createContext('light');"})}),e.jsx("h2",{id:"using",className:"text-2xl font-semibold",children:"Using Context"}),e.jsxs("p",{children:["To use a context, wrap a component tree with the"," ",e.jsx("code",{children:"Context.Provider"})," and consume the context using"," ",e.jsx("code",{children:"useContext()"}),"."]}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm",children:e.jsx("code",{children:`function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={\`btn \${theme}-theme\`}>Theme is {theme}</button>;
}`})}),e.jsx("h2",{id:"example",className:"text-2xl font-semibold",children:"Full Example with Custom Context"}),e.jsx("p",{children:"This example shows a basic counter with context for global state management:"}),e.jsx("pre",{className:"bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm",children:e.jsx("code",{children:`const CountContext = React.createContext();

function CounterProvider({ children }) {
  const [count, setCount] = React.useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function CounterDisplay() {
  const { count } = useContext(CountContext);
  return <p>Current count: {count}</p>;
}

function IncrementButton() {
  const { setCount } = useContext(CountContext);
  return <button onClick={() => setCount(c => c + 1)}>Increment</button>;
}

function App() {
  return (
    <CounterProvider>
      <CounterDisplay />
      <IncrementButton />
    </CounterProvider>
  );
}`})}),e.jsxs("div",{className:"mt-12 flex justify-end items-center gap-2 text-sm",children:[e.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:"Next:"}),e.jsxs(c,{to:"/community",className:"text-indigo-600 dark:text-indigo-400 font-medium flex items-center hover:underline",children:["Community ",e.jsx(u,{className:"ml-1"})]})]})]})})}export{f as default};
