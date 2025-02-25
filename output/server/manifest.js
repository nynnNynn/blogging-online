export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["content/frontend/express.md","content/frontend/React.md","content/前端/二鬼子.md","content/前端/小东西.md","favicon.png"]),
	mimeTypes: {".md":"text/markdown",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BEHae473.js",app:"_app/immutable/entry/app.B9w4wFxO.js",imports:["_app/immutable/entry/start.BEHae473.js","_app/immutable/chunks/DAUKkMcL.js","_app/immutable/chunks/BrCeJPug.js","_app/immutable/chunks/B5jIyp0i.js","_app/immutable/chunks/CYrt0Rf9.js","_app/immutable/entry/app.B9w4wFxO.js","_app/immutable/chunks/BrCeJPug.js","_app/immutable/chunks/Fcpjfpcx.js","_app/immutable/chunks/CPPPNyM-.js","_app/immutable/chunks/CS8tfDhE.js","_app/immutable/chunks/B5jIyp0i.js","_app/immutable/chunks/CYrt0Rf9.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
