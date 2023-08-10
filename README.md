memo: if we wrapped the component by the memo then the component will be re-render only when the state value changes that are come from the props

useCallback: it returns the memoized functions. it only re-render the child component when the state of the that depended child changes.
Otherwise do not re-render.
In React, functional components can re-render whenever their state or props change. When a component re-renders, any functions defined within it are recreated. This can lead to unnecessary re-renders of child components that depend on these functions as props. The useCallback hook allows you to ensure that a function remains the same between renders as long as its dependencies (the values it relies on) haven't changed. This is particularly useful when you're passing functions down to child components or using them as dependencies for other hooks.

useMemo: it returns the memoized value. it is used, when we are working with the state value. if any function is taking a time for rendering and delay on returning a value according to specific state then that function also affects/makes delay on changing the other all state value. So to protect from affecting delay on changing state value one-another, we use useMemo. UseMemo functions is only run according to the dependency add on it.

The useMemo hook is another important part of React's hooks API, and it's closely related to useCallback. While useCallback is used to memoize functions, useMemo is used to memoize values, including the results of function computations.

The basic idea of useMemo is to compute a value and cache it so that the computation isn't repeated unless the dependencies of that computation change. This can be helpful when dealing with expensive calculations or computations that are used in rendering.
