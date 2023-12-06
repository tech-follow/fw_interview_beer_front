# Follow Beers

## An interview dedicated App

### [Guidelines](https://follow-health.notion.site/Test-Frontend-Developer-9d087ba3adba4cfdbfb5493a21479501)

<img src="./doc/screenshot.png" alt="Follow-Beers screenshot" />

### Presentation

**Follow Beers** is a functional app. It's composed by a Node.js API and a React front

- [API documentation _./api/README.md_](./api/README.md)
- [React front documentation _./front/README.md_](./front/README.md)

## Best Practices and Improvements

### Best Practices

- **Usage of data control library (Formik)**: Enhances form validation and data management.
- **Usage of "dummy components"**: Enhancing code reusability and maintainability.
- **Granular folder structure**: Each component is organized in its own folder, with a clear structure including an `index.ts` file, a dedicated CSS file, and an associated type file.
- **Use of CSS cariables**: For better style consistency and maintenance ease.
- **Key attribute in component lists**: For example, `key={beer.uuid}` in `BeerList.component.tsx`, improving performance and list management in React.
- **Handling empty file code**: For instance, `Rate.js` is currently empty and should be remove or fill.
- **Use of a loader**: Effectively managing the wait for API responses, enhancing user experience.

### Bad Practices

- **No unit tests for render components**: The render components currently lack unit test coverage
- **Usage of `any` in TypeScript, especially for critical types**: Utilizing `any`, particularly for important types like `beers`, break TypeScript's benefits of type safety and can lead to potential runtime. By the way , BeerListProps having `beers: any[]` import the right type but don't use it. Also BeerListProps should be in a .model file.

### Areas for Improvement

- **Adding tests**: Implementing unit and integration tests to enhance code reliability.
- **Using react context and reducer**: Replacing Redux-Saga with Context-Reducer approach for an application of this size.
- **Consistency in file extensions**: Standardizing file extensions (for example, using `.tsx` instead of `.jsx`).
- **Harmonizing Node.js versions**: Using `.nvmrc` to ensure a consistent Node.js version among all contributors.
- **Self-managed lists by the List Component**: The `List` component should handle the retrieval and display of data itself.
- **Prefer fragments over unnecessary div**: Using React fragments instead of `div` without attributes or classes, for a cleaner DOM and improved performance.
- **Transforming SVGs into React components**: Allowing for image weight optimization and the addition of accessible attributes like `aria-label`, by converting SVG files into React components.
- **Use of Dependabot**: Integrating Dependabot for automated dependency management, reducing technical debt related to library versions (for instance, preventing React to be late by several major versions).
