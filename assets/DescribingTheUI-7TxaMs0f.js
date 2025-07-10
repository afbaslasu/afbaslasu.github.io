import{j as e,L as i}from"./index-BE4MMDpY.js";import{D as s,R as t}from"./RightNav-DqL7D8bo.js";import{S as a}from"./Sidebar-DdmHaCeO.js";import{w as n}from"./index-BZVHiTos.js";const r=[{id:"describing-ui",label:"Describing the UI"},{id:"data-to-ui",label:"1. Mapping Data to UI"},{id:"jsx-structure",label:"2. Structuring with JSX"},{id:"styling-elements",label:"3. Styling Elements"},{id:"using-props",label:"4. Using Props to Describe UI"},{id:"conditionals",label:"5. Conditional Rendering"}];function m(){return e.jsx(s,{leftNav:e.jsx(a,{}),rightNav:e.jsx(t,{links:r}),children:e.jsxs("div",{className:"prose dark:prose-invert max-w-4xl",children:[e.jsx("h1",{id:"describing-ui",className:"mb-4 text-indigo-600 font-bold text-3xl",children:"Describing the UI"}),e.jsxs("p",{className:"mb-6",children:["In React, the UI is a function of your data. You describe what the UI should look like for any given state of your application using"," ",e.jsx("span",{className:"text-indigo-600 font-semibold",children:"JSX"}),". React takes care of updating the DOM efficiently when your data changes."]}),e.jsx("h2",{id:"data-to-ui",className:"mb-2 text-indigo-600 semi-bold text-2xl",children:"1. Mapping Data to UI"}),e.jsx("p",{className:"mb-4",children:"Data-driven UIs begin with representing your app's state as data, then mapping that data into elements."}),e.jsx("pre",{className:"bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6",children:e.jsx("code",{children:`const users = ["Ada", "Grace", "Linus"];

function UserList() {
  return (
    <ul>
      {users.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}`})}),e.jsx("h2",{id:"jsx-structure",className:"mb-2 text-indigo-600 semi-bold text-2xl",children:"2. Structuring with JSX"}),e.jsx("p",{className:"mb-6",children:"JSX is a syntax extension for JavaScript that looks similar to HTML. It lets you structure your UI in a way that's easy to understand."}),e.jsx("h2",{id:"styling-elements",className:"mb-2 text-indigo-600 semi-bold text-2xl",children:"3. Styling Elements"}),e.jsxs("p",{className:"mb-4",children:["React supports inline styles, CSS classes, and utility-first CSS frameworks like"," ",e.jsx("span",{className:"text-indigo-600 font-semibold",children:"Tailwind CSS"}),". Here's an example with Tailwind:"]}),e.jsx("pre",{className:"bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6",children:e.jsx("code",{children:`function Alert() {
  return <div className="bg-red-100 text-red-800 p-4 rounded">Error occurred!</div>;
}`})}),e.jsx("h2",{id:"using-props",className:"mb-2 text-indigo-600 semi-bold text-2xl",children:"4. Using Props to Describe UI"}),e.jsx("p",{className:"mb-6",children:"Props let you pass information into components, allowing for dynamic rendering."}),e.jsx("pre",{className:"bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6",children:e.jsx("code",{children:`function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}`})}),e.jsx("h2",{id:"conditionals",className:"mb-2 text-indigo-600 semi-bold text-2xl",children:"5. Conditional Rendering"}),e.jsx("p",{className:"mb-6",children:"React allows you to render different UIs based on conditions using JavaScript logic."}),e.jsx("pre",{className:"bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-6",children:e.jsx("code",{children:`function Status({ isLoading }) {
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <p>Data loaded.</p>;
}`})}),e.jsx("div",{className:"mt-10 flex justify-end",children:e.jsxs(i,{to:"/learn",className:"inline-flex items-center gap-2 text-indigo-600 hover:underline text-lg",children:["Back to Learn Overview ",e.jsx(n,{})]})})]})})}export{m as default};
