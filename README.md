# Svelte + Vite

Run `npm i` then `npm run dev` to reproduce and open the browser

You'll get the error

```
Uncaught Svelte error: svelte_component_invalid_this_value
The `this={...}` property of a `<svelte:component>` must be a Svelte component, if defined

	in DecoratorWrapper.svelte
	in ScrollDecorator.svelte
	in DecoratorWrapper.svelte
	in RenderFragment.svelte
	in ComposeFragments.svelte
	in _module.svelte
	in AnchorDecorator.svelte
	in ScrollDecorator.svelte
	in DecoratorWrapper.svelte
	in RenderFragment.svelte
	in ComposeFragments.svelte
	in AnchorDecorator.svelte
	in Router.svelte
	in App.svelte

    at svelte_component_invalid_this_value (http://localhost:5173/node_modules/.vite/deps/chunk-QS6J2F3K.js?v=3ce9e45e:375:19)
    at validate_dynamic_component (http://localhost:5173/node_modules/.vite/deps/chunk-JLOINEC6.js?v=3ce9e45e:2822:7)
    at http://localhost:5173/node_modules/.vite/deps/@roxi_routify.js?v=82f63852:2632:5
    at http://localhost:5173/node_modules/.vite/deps/chunk-JLOINEC6.js?v=3ce9e45e:1060:30
    at execute_reaction_fn (http://localhost:5173/node_modules/.vite/deps/chunk-QS6J2F3K.js?v=3ce9e45e:1560:29)
    at execute_effect (http://localhost:5173/node_modules/.vite/deps/chunk-QS6J2F3K.js?v=3ce9e45e:1681:20)
    at create_effect (http://localhost:5173/node_modules/.vite/deps/chunk-QS6J2F3K.js?v=3ce9e45e:476:7)
    at branch (http://localhost:5173/node_modules/.vite/deps/chunk-QS6J2F3K.js?v=3ce9e45e:582:10)
    at http://localhost:5173/node_modules/.vite/deps/chunk-JLOINEC6.js?v=3ce9e45e:1060:17
    at execute_reaction_fn (http://localhost:5173/node_modules/.vite/deps/chunk-QS6J2F3K.js?v=3ce9e45e:1560:29)
```
