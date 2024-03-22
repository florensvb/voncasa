export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "voncasa/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CrPPUUXR.js","app":"_app/immutable/entry/app.nYcVaq0B.js","imports":["_app/immutable/entry/start.CrPPUUXR.js","_app/immutable/chunks/entry.67-SHgqA.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.nYcVaq0B.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Cw_2IG9P.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
