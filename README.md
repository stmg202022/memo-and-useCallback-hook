memo: if we wrapped the component by the memo then the component will be re-render only when the state value changes that are come from the props

useCallback: it returns the memoized functions. it only re-render the child component when the state of the that depended child changes.
Otherwise do not re-render.
In React, functional components can re-render whenever their state or props change. When a component re-renders, any functions defined within it are recreated. This can lead to unnecessary re-renders of child components that depend on these functions as props. The useCallback hook allows you to ensure that a function remains the same between renders as long as its dependencies (the values it relies on) haven't changed. This is particularly useful when you're passing functions down to child components or using them as dependencies for other hooks.
