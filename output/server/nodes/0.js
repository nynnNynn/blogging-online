

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DkdvV4C8.js","_app/immutable/chunks/CPPPNyM-.js","_app/immutable/chunks/BrCeJPug.js"];
export const stylesheets = [];
export const fonts = [];
