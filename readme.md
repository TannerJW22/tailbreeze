:: Tailbreeze ::
Improves Tailwind CSS className readability, re-usability, and organization.

// {1} Import Tailbreeze using "npm install tailbreeze"

// {2} Instatiate classNames using the following syntax:

const myClass = Tailbreeze.model({
myCategory: "my string of tailwind classes for this category",
myCategory2: "my string of tailwind classes for category2",
myCategory3: {
render: "my string of tailwind classes for myCategory3 onRender"
hover: "my string of tailwind classes for myCategory3 onHover"
active: "my string of tailwind classes for myCategory3 onActive"
}
})

// {3} Implement Tailbreeze object into component

  <div>
    <MyComponent className={myClass.toString()}>
  </div>

// [#] IMPORTANT NOTES

1. {myCategory} keys are named using whatever convention the user prefers, although it is recommended
   to use the Tailwind styling categories such as background, border, typography, spacing, etc.

2. {myCategory} values must either be a valid Tailwind className string OR a TailbreezeConfigObject.
   TailbreezeConfigObjects are used to organize styling differences across different state changes.
   When using the TailbreezeConfigObject, by default the appropriate state prefix will AUTOMATICALLY
   BE ADDED to every className in the string based on the key value you provided. when .toString() is
   called. To output a version of a string with this behavior disabled, use .toAltString() instead.

   Currently, the following state variables are the only valid key names accepted for this object:
   a. default: "classNames you want to use with no prefix."
   b. hover: "classNames you want to use with the prefix 'hover:'"
   c. active: "classNames you want to use with the prefix 'active:'"
   d. focus: "classNames you want to use with the prefix 'focus:'"
   e. visited: "classNames you want to use with the prefix 'visited:'"
   f. disabled: "classNames you want to use with the prefix 'disabled:'"
   g. sm: "classNames you want to use with the prefix 'sm:'"
   h. md: "classNames you want to use with the prefix 'md:'",
   i. lg: "classNames you want to use with the prefix 'lg:'"
   j. xl: "classNames you want to use with the prefix 'xl:'"
   k. "2xl": "classNames you want to use with the prefix '2xl:'"

3. You can optionally chain .toString() to the declaration of myClass during Step#2.

4. Future implementation will include additional Tailwind state variables and even will even
   be able to use custom, user-defined state variables.
