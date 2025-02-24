const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "blogging-online/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BMFXQHOJ.js",app:"_app/immutable/entry/app.C1QIPXTs.js",imports:["_app/immutable/entry/start.BMFXQHOJ.js","_app/immutable/chunks/oWD2vhOK.js","_app/immutable/chunks/6CqvH31B.js","_app/immutable/chunks/CsdOU87w.js","_app/immutable/chunks/BJaPMxvx.js","_app/immutable/entry/app.C1QIPXTs.js","_app/immutable/chunks/6CqvH31B.js","_app/immutable/chunks/CGQfXzUv.js","_app/immutable/chunks/D9vbrt_L.js","_app/immutable/chunks/Cau3sMjF.js","_app/immutable/chunks/CsdOU87w.js","_app/immutable/chunks/BJaPMxvx.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BzjQ2hJx.js')),
			__memo(() => import('./chunks/1-DwH5yhnl.js')),
			__memo(() => import('./chunks/2-alvTgi-b.js'))
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

const prerendered = new Set([]);

const base = "/blogging-online";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
