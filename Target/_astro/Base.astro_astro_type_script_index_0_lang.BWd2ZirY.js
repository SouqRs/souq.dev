const f = "modulepreload",
	h = function (o) {
		return "/" + o;
	},
	l = {},
	E = function (d, i, b) {
		let a = Promise.resolve();
		if (i && i.length > 0) {
			document.getElementsByTagName("link");
			const n = document.querySelector("meta[property=csp-nonce]"),
				e = n?.nonce || n?.getAttribute("nonce");
			a = Promise.allSettled(
				i.map((t) => {
					if (((t = h(t)), t in l)) return;
					l[t] = !0;
					const s = t.endsWith(".css"),
						u = s ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${t}"]${u}`)) return;
					const r = document.createElement("link");
					if (
						((r.rel = s ? "stylesheet" : f),
						s || (r.as = "script"),
						(r.crossOrigin = ""),
						(r.href = t),
						e && r.setAttribute("nonce", e),
						document.head.appendChild(r),
						s)
					)
						return new Promise((m, p) => {
							r.addEventListener("load", m),
								r.addEventListener("error", () =>
									p(
										new Error(
											`Unable to preload CSS for ${t}`,
										),
									),
								);
						});
				}),
			);
		}
		function c(n) {
			const e = new Event("vite:preloadError", { cancelable: !0 });
			if (((e.payload = n), window.dispatchEvent(e), !e.defaultPrevented))
				throw n;
		}
		return a.then((n) => {
			for (const e of n || []) e.status === "rejected" && c(e.reason);
			return d().catch(c);
		});
	};
(
	await E(async () => {
		const { initializeApp: o } = await import("./index.esm.BE6rRU-J.js");
		return { initializeApp: o };
	}, [])
).initializeApp({
	apiKey: "AIzaSyCqdOxv8WlI90ZeLZHjPOXtm0BWib935gM",
	authDomain: "souqrs.firebaseapp.com",
	databaseURL: "https://souqrs-default-rtdb.firebaseio.com",
	projectId: "souqrs",
	storageBucket: "souqrs.appspot.com",
	messagingSenderId: "686609704824",
	appId: "1:686609704824:web:f90dcd21825de0d2744a8d",
	measurementId: "G-MEVM3LGWJH",
});
//# sourceMappingURL=Base.astro_astro_type_script_index_0_lang.BWd2ZirY.js.map
