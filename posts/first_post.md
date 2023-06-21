---
title: A test blog
author: Ridwan Ajibola
date: 2023-01-03T11:50:20.255Z
thumbnail: https://images.unsplash.com/photo-1545065695-64b67d551e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2873&q=80
---

# Simplifying Icon Usage and Management in React Applications

Icons are a fundamental element in modern user interfaces, providing visual cues and enhancing the overall user experience. In React applications, managing and utilizing icons efficiently can be a challenge, especially as the number of icons grows. In this article, we'll explore a solution to simplify icon usage and management by creating a reusable icon component and automating the generation of icon components from SVG files.

## The Problem

In typical React applications, developers often import icons individually whenever they are needed. This approach can lead to a cluttered codebase, with numerous import statements scattered throughout the application. As the number of icons increases, managing and updating these individual imports becomes tedious and error-prone. Additionally, ensuring consistent styling and formatting across different icon components can be challenging.

## Introducing a Reusable Icon Component

To address these challenges, we can create a reusable icon component that centralizes the management of icons. By consolidating all icons in one place, we improve code organization, enhance maintainability, and simplify the process of incorporating icons into our application.

### Step 1: Create an Icons Folder

The first step is to create an `icons` folder in the root directory of your React project. This folder will serve as the central repository for all your icons.

```bash
my-react-project
└── icons
```

### Step 2: Create SVG Icon Files in the Icons Folder

Next, let's create SVG icon files within the `icons` folder. For example, we can create files like `Add.tsx`, `Remove.tsx`, etc., to represent different icons.

```bash
my-react-project
└── icons
    ├── Add.tsx
    ├── Remove.tsx
    └── ...
```

The content of each icon file will contain the SVG code representing the respective icon. You can utilize the SVG code provided by your preferred icon library or create your own SVG design.

### Step 3: Create an index.ts File in the Icons Folder

To export all the icons from the `icons` folder, let's create an `index.ts` file within the `icons` folder. This file will serve as the entry point for importing the icons.

```tsx
// icons/index.ts
export { default as Add } from "./Add";
export { default as Remove } from "./Remove";
// Export other icons as needed
```

In the `index.ts` file, we export each icon component individually using the `export` statement. Make sure to adjust the file names and exports based on your specific icons.

### Step 4: Create a Reusable Icon Component

To utilize the icons stored in the `icons` folder, let's create a reusable `Icon` component. This component will serve as a wrapper for rendering the desired icon based on its name.

```tsx
import React from "react";
import * as icons from "./icons";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof icons;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const DynamicComponent = icons[name];

  if (!DynamicComponent) {
    console.warn(`Icon '${name}' not found.`);
    return null;
  }

  return <DynamicComponent {...props} />;
};

export default Icon;
```

The `Icon` component accepts a `name` prop, which corresponds to the name of the icon file without the file extension. It dynamically imports the appropriate icon component from the `icons` object. If the specified icon is not found, a warning is logged, and `null` is returned.

### Step 5: Utilizing the Icon Component

Now that we have our `Icon` component set up, we can easily use it to render any icon from the `icons` folder. Simply pass the desired icon name as the `name` prop.

```tsx
import React from "react";
import Icon from "./Icon";

const App: React.FC = () => {
  return (
    <div>
      <h1>My React App</h1>
      <Icon name="Add" />
      <Icon name="Remove" />
      {/* Add more Icon components with different names as needed */}
    </div>
  );
};

export default App;
```

In the example above, we render the "Add" and "Remove" icons using the `Icon` component. You can add more `Icon` components with different names as needed. One of the significant advantages of using the `Icon` component is that it provides IntelliSense support in modern code editors. Developers no longer need to memorize the exact icon names or refer to external documentation. The editor will offer auto-completion suggestions, making it easier to select the desired icon from the available options.

## Automating Icon Component Generation with SVGR

To streamline the process of creating icon components from SVG files, we can utilize a tool called SVGR. SVGR converts SVG files into React components, eliminating the need for manual conversion and saving time.

### Setting Up the SVGR Script

To begin, let's add an SVGR script to our `package.json` file to automate the generation of icon components. Adjust the script to match your folder structure.

```json
"scripts": {
  "generate-icons": "rimraf src/icons && svgr --no-dimensions --out-dir src/icons --src-dir src/assets/icons --ext tsx --index-template src/icons/index.ts && prettier --write 'src/icons/**/*.tsx'"
}
```

The script performs the following tasks:

1. Removes the existing `src/icons` directory.
2. Converts SVG files located in the `src/assets/icons` folder into React components using SVGR.
3. Outputs the generated components to the `src/icons` directory.
4. Generates an `index.ts` file in the `src/icons` folder that exports all the icon components.
5. Formats the resulting TypeScript files using Prettier.

### Running the SVGR Script

To generate the icon components, execute the SVGR script by running the following command in your terminal:

```bash
npm run generate-icons
```

or

```bash
yarn generate-icons
```

This command will remove the existing `src/icons` directory, convert the SVG files to React components, generate an `index.ts` file for the `icons` folder, and format the resulting files using Prettier.

## Conclusion

In this article, we explored a solution for simplifying icon usage and management in React applications. By creating a reusable `Icon` component and automating the generation of icon components from SVG files, we can improve code organization, enhance maintainability, and streamline the process of incorporating icons into our applications. With a centralized icon repository, an easy-to-use `Icon` component, and the added benefit of IntelliSense support, developers can efficiently manage and utilize icons, leading to cleaner code and a more consistent user experience.

I hope this article provides valuable insights into simplifying icon management in React applications. If you have any questions or suggestions, please feel free to share them in the comments below. Happy coding!
