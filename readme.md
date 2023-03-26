Improves Tailwind CSS className readability, re-usability, and organization.

// {1} Import Tailbreeze using "npm install tailbreeze"

// {2} Instatiate classNames using the following syntax:

const myClass = tailbreeze({
myCategory: "my string of tailwind classes for this category",
myCategory2: "my string of tailwind classes for category2",
myCategory3: "my string of tailwind classes for category2",
})

// {3} Implement Tailbreeze object into component

  <div>
    <MyComponent className={myClass}>
  </div>
