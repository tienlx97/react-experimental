

const gkx = {
  11557: false,
  11685: false,
  10839: false,
  21072: false,
  104: null,
  128: 250,
  344: 5000,
  388: 5000,
  17201: false,
  21063: false,
  2815: true,
  10850: false,
  21069: false,
  10211: false,

}

let f;
let h; let i; let j; let k;
let a = gkx["11557"];
let b = gkx["11685"];
let d = !0;
let e = gkx["10839"];
f = gkx["21072"] || ((f = gkx[104]) !== null ? f : !1);
h = (h = gkx["128"]) !== null ? h : 250;
i = (i = gkx["344"]) !== null ? i : 5e3;
j = (j = gkx["388"]) !== null ? j : 5e3;
let l = !1;
k = (k = gkx["17201"]) !== null ? k : !1;
let m = gkx["21063"]
  ; let n = !0
  ; let o =gkx["2815"]
  ; let p =gkx["10850"]
  ; let q = !1
  ; let r = !1
  ; let s = !1;
let c = !p && gkx["21069"] || gkx["10211"];


export const ReactFeatureFlags = {
  alwaysThrottleRetries : a,
  enableNoCloningMemoCache : b,
  enableObjectFiber : d,
  enableHiddenSubtreeInsertionEffectCleanup : e,
  enableRetryLaneExpiration : f,
  syncLaneExpirationMs : h,
  transitionLaneExpirationMs : i,
  retryLaneExpirationMs : j,
  enableScrollEndPolyfill : l,
  enableInfiniteRenderLoopDetection : k,
  enableTrustedTypesIntegration : m,
  enableFragmentRefs : n,
  enableViewTransition : o,
  enableComponentPerformanceTrack : p,
  enableTransitionTracing : q,
  renameElementSymbol : r,
  disableSchedulerTimeoutInWorkLoop : s,
  enableSchedulingProfiler : c,
}
