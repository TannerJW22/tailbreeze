# **Tailbreeze v0.2.0**

Tailbreeze allows you to store your Tailwind class names in an object of your own design, using whatever key-value pairs you find relevant, improving readability, reusability, and organization.

Values in Tailbreeze objects must be a string or another Tailbreeze object. Embedded Tailbreeze objects are recursively stringified and the entire object is combined into one valid Tailwind CSS className.

[Github](https://github.com/TannerJW22/tailbreeze) |  
[NPM](https://www.npmjs.com/package/tailbreeze)

---

# Installation

To install Tailbreeze, use the following command:

`npm install tailbreeze`

# Usage

Below is a basic example of using Tailbreeze to create a class name string for an Upload Button component.

### Module 1: ./UploadButton.tsx

```

import { uploadButton, uploadIcon } from "./UploadButton.tbz";`
import { FiUpload } from "react-icons/fi";
import { tailbreeze } from "tailbreeze";

export default function NavHeader() {
  return (
    <div>
      <button className={uploadButton}>
      <FiUpload className={uploadIcon} />
      Upload
      </button>
    </div>
  );
};

```

### Module 2: ./UploadButton.tbz.tsx

```

const uploadButton = tailbreeze({
  layout: "flex justify-center items-center gap-3",
  dimensions: "w-24 h-24",
  background: {
    default: "bg-blue-200",
    hover: "hover:bg-blue-300",
    active: "active:bg-red-500",
  },
  typography: {
    default: "text-sm font-semibold text-blue-700",
    active: "active:text-white",
  },
  border: {
    default: "rounded-lg",
    hover: "hover:border hover:border-2 hover:border-blue-700",
  },
});

const uploadIcon = tailbreeze({
  layout: "w-5 h-5",
});

export { uploadButton, uploadIcon };

```
