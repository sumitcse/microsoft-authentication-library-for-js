window.BENCHMARK_DATA = {
  "lastUpdate": 1754561448453,
  "repoUrl": "https://github.com/sumitcse/microsoft-authentication-library-for-js",
  "entries": {
    "msal-node client-credential Regression Test": [
      {
        "commit": {
          "author": {
            "email": "137432604+Ugonnaak1@users.noreply.github.com",
            "name": "Ugonna Akali",
            "username": "Ugonnaak1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc60b43a3a5619f510da62d02be48bcddd3aaf5a",
          "message": "Surface Errors from MsalRuntime with Interaction Required (#7961)\n\nWhen customers use `acquireTokenSilent` with msal-node-runtime, errors\nreported to OneAuth-MSAL (such as interaction_required) are surfaced as:\n\n```\n  \"errormessage\": \"interaction_required: (pii)\",\n  \"errorname\": \"InteractionRequiredAuthError\",\n  \"errorstack\": \"InteractionRequiredAuthError: interaction_required: (pii)\\n    at ue.wrapError (c:\\\\Program <REDACTED: user-file-path> VS <REDACTED: user-file-path>:2:386244)\\n    at Object.o (c:\\\\Program <REDACTED: user-file-path> VS <REDACTED: user-file-path>:2:381487)\"\n```\n \nHowever, these errors lack critical context such as the error code and\nerror tag from the broker or our library which makes it difficult for\nour team to diagnose and resolve their issues.\n\n\nThis PR helps surface errors for interaction-required scenarios by \nreplacing `InteractionRequiredAuthError` with `NativeAuthError` for\nInteractionRequired Status in NativeBrokerPlugin and enhancing the\nNativeAuthError context\n\n---------\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2025-08-06T15:48:24-07:00",
          "tree_id": "bc959580459691b12c9d16697e031bc9e8d52076",
          "url": "https://github.com/sumitcse/microsoft-authentication-library-for-js/commit/dc60b43a3a5619f510da62d02be48bcddd3aaf5a"
        },
        "date": 1754561447458,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsFirstItemInTheCache",
            "value": 236045,
            "range": "±0.83%",
            "unit": "ops/sec",
            "extra": "236 samples"
          },
          {
            "name": "ConfidentialClientApplication#acquireTokenByClientCredential-fromCache-resourceIsLastItemInTheCache",
            "value": 237173,
            "range": "±0.85%",
            "unit": "ops/sec",
            "extra": "236 samples"
          }
        ]
      }
    ]
  }
}