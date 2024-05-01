const BHA_ICONS_MAP = {
  "adguard-home": {
    "keywords": [],
    "path": "M11.999 2c-3.05 0-6.727.717-9.755 2.295 0 3.409-.042 11.902 9.755 17.705 9.798-5.802 9.757-14.296 9.757-17.705C18.728 2.717 15.049 2 11.999 2zm5.232 5.234c.1.023.204.073.312.16l-5.9 7.95-4.268-5.012c.282-.206 1.483-.986 2.368.036l1.852 2.23 4.92-5.117h.008c.157-.142.41-.316.708-.247z"
  },
  "apple-tv": {
    "keywords": [],
    "path": "M7.189 6.9s-.932.005-1.602.888c-.596.785-.444 1.457-.444 1.457s.808.14 1.519-.714c.666-.8.527-1.63.527-1.63zm4.47.615v2.314h-.939v1.403h.94v4.098c0 1.089.64 1.756 1.851 1.756.39 0 .763-.054 1.117-.163.354-.11.653-.218.898-.327l-.367-1.443c-.11.045-.613.258-.994.258-.402 0-.68-.2-.68-.694v-3.485h1.497V9.829h-1.498V7.515zM7.046 9.353c-.832 0-1.472.474-1.817.474-.401 0-1-.446-1.773-.446C2.267 9.381 1 10.445 1 12.474 1 14.534 2.496 17.1 3.68 17.1c.413 0 1.048-.417 1.688-.417.628 0 1.091.401 1.687.401 1.298 0 2.258-2.703 2.258-2.703s-1.374-.532-1.374-2.076c0-1.368 1.103-1.932 1.103-1.932s-.564-1.02-1.998-1.02zm8.726.476 2.628 7.134h1.974L23 9.83h-1.715l-1.824 5.65-1.811-5.65z"
  },
  "asus": {
    "keywords": [],
    "path": "m21.975 20.356-.013-.025a1.101 1.101 0 0 0-.087-.254v-.019l-8.96-17.492a1.008 1.008 0 0 0-1.812 0l-8.972 17.5v.012a1.325 1.344 0 0 0-.093.285c-.025.095-.038.19-.038.292.006.538.325 1.026.819 1.242h.006a1.318 1.337 0 0 0 .831.063l.087-.025c.094-.032.188-.07.263-.12l7.997-4.83 7.985 4.83a1.3 1.318 0 0 0 .35.145 1.312 1.33 0 0 0 .831-.063h.006A1.337 1.356 0 0 0 22 20.636c0-.096-.006-.19-.025-.286zm-17.876-.545 7.904-15.42 4.167 8.131zm9.516-3.803L16.932 14l2.968 5.78.019.032z"
  },
  "b-hyve": {
    "keywords": [],
    "path": "M6.5 2.474 1 12l5.5 9.526h11L23 12l-5.5-9.526zm1.565 4.432h1.16V9.37c1.675.002 3.398 0 5.094 0 .895 0 1.616.72 1.616 1.615v4.473c0 .895-.72 1.616-1.616 1.616-2.064-.038-6.254 0-6.254 0V6.906zm1.574 3.603a.413.413 0 0 0-.414.414v4.639c0 .23.185.414.414.414h4.722c.23 0 .414-.185.414-.414v-4.639a.413.413 0 0 0-.414-.414z"
  },
  "ceiling-downlight": {
    "keywords": [],
    "path": "M2 5v1l2 2h16l2-2V5zm9.5 5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5zm-3.467.002a.5.5 0 0 0-.48.273l-2 4a.501.501 0 0 0 .894.45l2-4a.501.501 0 0 0-.414-.723zm6.934 0a.501.501 0 0 0-.414.723l2 4a.501.501 0 0 0 .894-.45l-2-4a.501.501 0 0 0-.48-.273z"
  },
  "ceiling-fan": {
    "keywords": [],
    "path": "M8 5v2h3v5.267A2 2 0 0 0 10 14v1h4v-1a2 2 0 0 0-1-1.733V7h3V5h-6zm-2 9c-2.21 0-4 .671-4 1.5 0 .828 1.79 1.5 4 1.5s4-.672 4-1.5c0-.829-1.79-1.5-4-1.5zm12 0c-2.21 0-4 .671-4 1.5 0 .828 1.79 1.5 4 1.5s4-.672 4-1.5c0-.829-1.79-1.5-4-1.5zm-8 2v1a2 2 0 1 0 4 0v-1z"
  },
  "ceiling-fan-light": {
    "keywords": [],
    "path": "M8 3.68v2h3v5.268a2 2 0 0 0-1 1.732v1h4v-1a2 2 0 0 0-1-1.732V5.68h3v-2h-6zm-2 9a4 1.5 0 0 0-4 1.5 4 1.5 0 0 0 4 1.5 4 1.5 0 0 0 4-1.5 4 1.5 0 0 0-4-1.5zm12 0a4 1.5 0 0 0-4 1.5 4 1.5 0 0 0 4 1.5 4 1.5 0 0 0 4-1.5 4 1.5 0 0 0-4-1.5zm-8 2v1a2 2 0 0 0 1 1.732 2 2 0 0 0 2 0 2 2 0 0 0 1-1.732v-1zm-.537 1.887-1.733 1 .5.867 1.733-1zm5.074 0-.5.867 1.732 1 .5-.867zM11.5 18.32v2h1v-2z"
  },
  "ceiling-lamp": {
    "keywords": [],
    "path": "M11 2v5.674a3 3 0 0 0-.5.228 3 3 0 0 0-1.49 2.424 10 7 0 0 0-2.01.611A10 7 0 0 0 2 17h20a10 7 0 0 0-5-6.063 10 7 0 0 0-2.008-.609A3 3 0 0 0 13.5 7.902a3 3 0 0 0-.5-.226V2h-2zM9 19a3 3 0 0 0 1.5 2.598 3 3 0 0 0 3 0A3 3 0 0 0 15 19H9z"
  },
  "ceiling-lamp-plafond": {
    "keywords": [],
    "path": "M7.6 4.826v1.748h3.526v2.962c-.914-.874-2.067-1.506-3.43-1.506-1.56 0-3.113 1.026-4.13 2.35a3.85 3.85 0 0 1 1.736.322c.65-.61 1.51-1.022 2.395-1.022 1.757 0 3.192 1.308 3.429 3 .286-.069.58-.104.874-.106.295.002.588.037.874.106.237-1.692 1.672-3 3.43-3 .884 0 1.747.413 2.397 1.025a3.85 3.85 0 0 1 1.55-.33c.062 0 .125.004.188.008-1.017-1.327-2.573-2.353-4.136-2.353-1.362 0-2.515.634-3.428 1.509V6.574H16.4V4.826zm-3.85 6.648a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zm16.5 0a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zm-8.25 2.2a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5z"
  },
  "ceiling-lamp-round": {
    "keywords": [],
    "path": "M9 2.5v1a3 1.5 0 0 0 1.5 1.299 3 1.5 0 0 0 .5.113v3.824a11 7.15 0 0 1 1-.037 11 7.15 0 0 1 1 .033v-3.82a3 1.5 0 0 0 .5-.113A3 1.5 0 0 0 15 3.5v-1H9zm3 7.2a10 6.15 0 0 0-10 6.15A10 6.15 0 0 0 12 22a10 6.15 0 0 0 10-6.15A10 6.15 0 0 0 12 9.7z"
  },
  "ceiling-spot-lamp": {
    "keywords": [],
    "path": "M8.5 5v2H11v1H3v2h18V8h-8V7h2.5V5zm-2.394 6.666c-.578.016-1.201.297-1.74.918l-2.694 3.064 4.85 2.801 1.308-3.865c.591-1.71-.454-2.954-1.725-2.918zm11.788 0c-1.27-.036-2.315 1.207-1.724 2.918l1.309 3.865 4.85-2.8-2.694-3.065c-.54-.622-1.163-.902-1.74-.918zM12 12.061c-.875 0-1.75.647-2 1.939l-.8 4h5.6l-.8-4c-.25-1.292-1.125-1.94-2-1.94z"
  },
  "chandelier": {
    "keywords": [],
    "path": "M9 2v1c0 .536.572 1.031 1.5 1.3.235.067.487.118.75.152l-.002 5.634c.246-.056.5-.084.752-.086a3.5 3.5 0 0 1 .75.084V4.452c.263-.034.515-.085.75-.153C14.428 4.031 15 3.536 15 3V2H9zm3 9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm-7.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm15 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm-8.295 3.904a3.152 3.152 0 0 1-3.117 2.727c-.804 0-1.589-.375-2.18-.932A3.5 3.5 0 0 1 4.5 19a3.521 3.521 0 0 1-.172-.008c.925 1.206 2.34 2.139 3.76 2.139 1.26 0 2.325-.592 3.162-1.408v1.527c0 .414.336.75.75.75.4 0 .728-.351.748-.75v-1.527c.837.817 1.904 1.408 3.164 1.408 1.42 0 2.831-.932 3.756-2.137a3.5 3.5 0 0 1-1.578-.293c-.59.556-1.374.93-2.178.93a3.152 3.152 0 0 1-3.117-2.727c-.26.063-.527.095-.795.096a3.5 3.5 0 0 1-.795-.096z"
  },
  "dome-light": {
    "keywords": [],
    "path": "M4 6.9c0 2.86 1.5 5.5 4 6.93 2.5 1.43 5.5 1.43 8 0s4-4.07 4-6.93zm1.27 6.52L3.5 15.19l1.41 1.41 1.77-1.77zm13.46 0-1.41 1.41 1.77 1.77 1.41-1.41zM11 16.1v3h2v-3z"
  },
  "fan-speed-1": {
    "keywords": ["fan", "speed", "1"],
    "path": "m 20.918814,23.004303 h -3.148438 v -0.59375 h 1.210938 v -3.898438 h -1.210938 v -0.53125 q 0.246094,0 0.527344,-0.03906 0.28125,-0.04297 0.425781,-0.121094 0.179688,-0.09766 0.28125,-0.246094 0.105469,-0.152343 0.121094,-0.40625 h 0.605469 v 5.242188 h 1.1875 z M 12,11 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 m 0.5,-9 c 4.5,0 4.61,3.57 2.25,4.75 -0.99,0.49 -1.43,1.54 -1.62,2.47 0.48,0.2 0.9,0.51 1.22,0.91 3.7,-2 7.68,-1.21 7.68,2.37 0,4.5 -3.57,4.6 -4.75,2.23 -0.5,-0.99 -1.56,-1.43 -2.49,-1.62 -0.2,0.48 -0.51,0.89 -0.91,1.23 C 15.87,18.03 15.08,22 11.5,22 7,22 6.91,18.42 9.27,17.24 10.25,16.75 10.69,15.71 10.89,14.79 10.4,14.59 9.97,14.27 9.65,13.87 5.96,15.85 2,15.07 2,11.5 2,7 5.56,6.89 6.74,9.26 7.24,10.25 8.29,10.68 9.22,10.87 9.41,10.39 9.73,9.97 10.14,9.65 8.15,5.96 8.94,2 12.5,2 Z"
  },
  "fan-speed-2": {
    "keywords": ["fan", "speed", "2"],
    "path": "m 21.250845,23.004303 h -3.9375 v -0.816406 q 0.410156,-0.351563 0.820312,-0.703125 0.414063,-0.351563 0.769532,-0.699219 0.75,-0.726563 1.027343,-1.152344 0.277344,-0.429687 0.277344,-0.925781 0,-0.453125 -0.300781,-0.707031 -0.296875,-0.257813 -0.832031,-0.257813 -0.355469,0 -0.769532,0.125 -0.414062,0.125 -0.808593,0.382813 h -0.03906 v -0.820313 q 0.277344,-0.136719 0.738281,-0.25 0.464844,-0.113281 0.898438,-0.113281 0.894531,0 1.402344,0.433594 0.507812,0.429687 0.507812,1.167968 0,0.332032 -0.08594,0.621094 -0.08203,0.285156 -0.246094,0.542969 -0.152344,0.242187 -0.359375,0.476562 -0.203125,0.234375 -0.496094,0.519532 -0.417969,0.410156 -0.863281,0.796875 -0.445313,0.382812 -0.832031,0.710937 h 3.128906 z M 12,11 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 m 0.5,-9 c 4.5,0 4.61,3.57 2.25,4.75 -0.99,0.49 -1.43,1.54 -1.62,2.47 0.48,0.2 0.9,0.51 1.22,0.91 3.7,-2 7.68,-1.21 7.68,2.37 0,4.5 -3.57,4.6 -4.75,2.23 -0.5,-0.99 -1.56,-1.43 -2.49,-1.62 -0.2,0.48 -0.51,0.89 -0.91,1.23 C 15.87,18.03 15.08,22 11.5,22 7,22 6.91,18.42 9.27,17.24 10.25,16.75 10.69,15.71 10.89,14.79 10.4,14.59 9.97,14.27 9.65,13.87 5.96,15.85 2,15.07 2,11.5 2,7 5.56,6.89 6.74,9.26 7.24,10.25 8.29,10.68 9.22,10.87 9.41,10.39 9.73,9.97 10.14,9.65 8.15,5.96 8.94,2 12.5,2 Z"
  },
  "fan-speed-3": {
    "keywords": ["fan", "speed", "3"],
    "path": "m 20.739126,20.203522 q 0.1875,0.167968 0.308594,0.421875 0.121094,0.253906 0.121094,0.65625 0,0.398437 -0.144532,0.730468 -0.144531,0.332032 -0.40625,0.578125 -0.292968,0.273438 -0.691406,0.40625 -0.394531,0.128907 -0.867187,0.128907 -0.484375,0 -0.953125,-0.117188 -0.46875,-0.113281 -0.769532,-0.25 v -0.816406 h 0.05859 q 0.332031,0.21875 0.78125,0.363281 0.449219,0.144531 0.867188,0.144531 0.246093,0 0.523437,-0.08203 0.277344,-0.08203 0.449219,-0.242187 0.179687,-0.171875 0.265625,-0.378907 0.08984,-0.207031 0.08984,-0.523437 0,-0.3125 -0.101563,-0.515625 -0.09766,-0.207031 -0.273437,-0.324219 -0.175782,-0.121094 -0.425782,-0.164062 -0.25,-0.04687 -0.539062,-0.04687 H 18.680524 V 19.52384 h 0.273438 q 0.59375,0 0.945312,-0.246094 0.355469,-0.25 0.355469,-0.726562 0,-0.210938 -0.08984,-0.367188 -0.08984,-0.160156 -0.25,-0.261718 -0.167968,-0.101563 -0.359375,-0.140625 -0.191406,-0.03906 -0.433593,-0.03906 -0.371094,0 -0.789063,0.132813 -0.417969,0.132812 -0.789062,0.375 H 17.50475 V 17.43399 q 0.277344,-0.136718 0.738281,-0.25 0.464844,-0.117187 0.898438,-0.117187 0.425781,0 0.75,0.07813 0.324219,0.07813 0.585937,0.25 0.28125,0.1875 0.425782,0.453125 0.144531,0.265625 0.144531,0.621094 0,0.484375 -0.34375,0.847656 -0.339844,0.359375 -0.804688,0.453125 v 0.05469 q 0.1875,0.03125 0.429688,0.132813 0.242187,0.09766 0.410156,0.246094 z M 12,11 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 m 0.5,-9 c 4.5,0 4.61,3.57 2.25,4.75 -0.99,0.49 -1.43,1.54 -1.62,2.47 0.48,0.2 0.9,0.51 1.22,0.91 3.7,-2 7.68,-1.21 7.68,2.37 0,4.5 -3.57,4.6 -4.75,2.23 -0.5,-0.99 -1.56,-1.43 -2.49,-1.62 -0.2,0.48 -0.51,0.89 -0.91,1.23 C 15.87,18.03 15.08,22 11.5,22 7,22 6.91,18.42 9.27,17.24 10.25,16.75 10.69,15.71 10.89,14.79 10.4,14.59 9.97,14.27 9.65,13.87 5.96,15.85 2,15.07 2,11.5 2,7 5.56,6.89 6.74,9.26 7.24,10.25 8.29,10.68 9.22,10.87 9.41,10.39 9.73,9.97 10.14,9.65 8.15,5.96 8.94,2 12.5,2 Z"
  },
  "fan-speed-4": {
    "keywords": ["fan", "speed", "4"],
    "path": "m 21.383657,21.367584 h -0.863281 v 1.636719 h -0.75 V 21.367584 H 16.98522 v -0.898437 l 2.816406,-3.28125 h 0.71875 v 3.554687 h 0.863281 z m -1.613281,-0.625 v -2.625 l -2.253906,2.625 z M 12,11 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 m 0.5,-9 c 4.5,0 4.61,3.57 2.25,4.75 -0.99,0.49 -1.43,1.54 -1.62,2.47 0.48,0.2 0.9,0.51 1.22,0.91 3.7,-2 7.68,-1.21 7.68,2.37 0,4.5 -3.57,4.6 -4.75,2.23 -0.5,-0.99 -1.56,-1.43 -2.49,-1.62 -0.2,0.48 -0.51,0.89 -0.91,1.23 C 15.87,18.03 15.08,22 11.5,22 7,22 6.91,18.42 9.27,17.24 10.25,16.75 10.69,15.71 10.89,14.79 10.4,14.59 9.97,14.27 9.65,13.87 5.96,15.85 2,15.07 2,11.5 2,7 5.56,6.89 6.74,9.26 7.24,10.25 8.29,10.68 9.22,10.87 9.41,10.39 9.73,9.97 10.14,9.65 8.15,5.96 8.94,2 12.5,2 Z"
  },
  "fan-speed-5": {
    "keywords": ["fan", "speed", "5"],
    "path": "m 21.20397,21.156647 q 0,0.40625 -0.148438,0.777343 -0.148437,0.371094 -0.40625,0.625 -0.28125,0.273438 -0.671875,0.421875 -0.386718,0.144532 -0.898437,0.144532 -0.476563,0 -0.917969,-0.101563 -0.441406,-0.09766 -0.746094,-0.238281 v -0.824219 h 0.05469 q 0.320312,0.203125 0.75,0.347656 0.429687,0.140625 0.84375,0.140625 0.277344,0 0.535156,-0.07813 0.261719,-0.07813 0.464844,-0.273437 0.171875,-0.167969 0.257812,-0.402344 0.08984,-0.234375 0.08984,-0.542969 0,-0.300781 -0.105469,-0.507812 -0.101562,-0.207031 -0.285156,-0.332031 -0.203125,-0.148438 -0.496094,-0.207032 -0.289062,-0.0625 -0.648437,-0.0625 -0.34375,0 -0.664063,0.04687 -0.316406,0.04687 -0.546875,0.09375 v -2.996093 h 3.5 v 0.683593 h -2.746093 v 1.546875 q 0.167968,-0.01563 0.34375,-0.02344 0.175781,-0.0078 0.304687,-0.0078 0.472656,0 0.828125,0.08203 0.355469,0.07813 0.652344,0.28125 0.3125,0.214843 0.484375,0.554687 0.171875,0.339844 0.171875,0.851563 z M 12,11 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 m 0.5,-9 c 4.5,0 4.61,3.57 2.25,4.75 -0.99,0.49 -1.43,1.54 -1.62,2.47 0.48,0.2 0.9,0.51 1.22,0.91 3.7,-2 7.68,-1.21 7.68,2.37 0,4.5 -3.57,4.6 -4.75,2.23 -0.5,-0.99 -1.56,-1.43 -2.49,-1.62 -0.2,0.48 -0.51,0.89 -0.91,1.23 C 15.87,18.03 15.08,22 11.5,22 7,22 6.91,18.42 9.27,17.24 10.25,16.75 10.69,15.71 10.89,14.79 10.4,14.59 9.97,14.27 9.65,13.87 5.96,15.85 2,15.07 2,11.5 2,7 5.56,6.89 6.74,9.26 7.24,10.25 8.29,10.68 9.22,10.87 9.41,10.39 9.73,9.97 10.14,9.65 8.15,5.96 8.94,2 12.5,2 Z"
  },
  "fan-speed-6": {
    "keywords": ["fan", "speed", "6"],
    "path": "m 21.336782,21.117584 q 0,0.886719 -0.585937,1.449219 -0.582031,0.558594 -1.429688,0.558594 -0.429687,0 -0.78125,-0.132813 -0.351562,-0.132812 -0.621093,-0.394531 -0.335938,-0.324219 -0.519532,-0.859375 -0.179687,-0.535156 -0.179687,-1.289063 0,-0.773437 0.164062,-1.371093 0.167969,-0.597657 0.53125,-1.0625 0.34375,-0.441407 0.886719,-0.6875 0.542969,-0.25 1.265625,-0.25 0.230469,0 0.386719,0.01953 0.15625,0.01953 0.316406,0.07031 v 0.746094 h -0.03906 q -0.109375,-0.05859 -0.332032,-0.109375 -0.21875,-0.05469 -0.449218,-0.05469 -0.839844,0 -1.339844,0.527343 -0.5,0.523438 -0.582031,1.417969 0.328125,-0.199219 0.644531,-0.300781 0.320312,-0.105469 0.738281,-0.105469 0.371094,0 0.652344,0.07031 0.285156,0.06641 0.582031,0.273437 0.34375,0.238281 0.515625,0.601563 0.175781,0.363281 0.175781,0.882812 z m -0.792968,0.03125 q 0,-0.363281 -0.109375,-0.601562 -0.105469,-0.238282 -0.351563,-0.414063 -0.179687,-0.125 -0.398437,-0.164062 -0.21875,-0.03906 -0.457032,-0.03906 -0.332031,0 -0.617187,0.07813 -0.285156,0.07813 -0.585938,0.242188 -0.0078,0.08594 -0.01172,0.167968 -0.0039,0.07813 -0.0039,0.199219 0,0.617188 0.125,0.976563 0.128907,0.355468 0.351563,0.5625 0.179687,0.171875 0.386719,0.253906 0.210937,0.07813 0.457031,0.07813 0.566406,0 0.890625,-0.34375 0.324219,-0.347656 0.324219,-0.996094 z M 12,11 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 m 0.5,-9 c 4.5,0 4.61,3.57 2.25,4.75 -0.99,0.49 -1.43,1.54 -1.62,2.47 0.48,0.2 0.9,0.51 1.22,0.91 3.7,-2 7.68,-1.21 7.68,2.37 0,4.5 -3.57,4.6 -4.75,2.23 -0.5,-0.99 -1.56,-1.43 -2.49,-1.62 -0.2,0.48 -0.51,0.89 -0.91,1.23 C 15.87,18.03 15.08,22 11.5,22 7,22 6.91,18.42 9.27,17.24 10.25,16.75 10.69,15.71 10.89,14.79 10.4,14.59 9.97,14.27 9.65,13.87 5.96,15.85 2,15.07 2,11.5 2,7 5.56,6.89 6.74,9.26 7.24,10.25 8.29,10.68 9.22,10.87 9.41,10.39 9.73,9.97 10.14,9.65 8.15,5.96 8.94,2 12.5,2 Z"
  },
  "fan-speed-7": {
    "keywords": ["fan", "speed", "7"],
    "path": "m 21.26647,18.05899 -2.632813,4.945313 H 17.79772 l 2.800781,-5.132813 h -3.3125 V 17.187897 H 21.26647 Z M 12,11 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 m 0.5,-9 c 4.5,0 4.61,3.57 2.25,4.75 -0.99,0.49 -1.43,1.54 -1.62,2.47 0.48,0.2 0.9,0.51 1.22,0.91 3.7,-2 7.68,-1.21 7.68,2.37 0,4.5 -3.57,4.6 -4.75,2.23 -0.5,-0.99 -1.56,-1.43 -2.49,-1.62 -0.2,0.48 -0.51,0.89 -0.91,1.23 C 15.87,18.03 15.08,22 11.5,22 7,22 6.91,18.42 9.27,17.24 10.25,16.75 10.69,15.71 10.89,14.79 10.4,14.59 9.97,14.27 9.65,13.87 5.96,15.85 2,15.07 2,11.5 2,7 5.56,6.89 6.74,9.26 7.24,10.25 8.29,10.68 9.22,10.87 9.41,10.39 9.73,9.97 10.14,9.65 8.15,5.96 8.94,2 12.5,2 Z"
  },
  "fan-speed-8": {
    "keywords": ["fan", "speed", "8"],
    "path": "m 21.293814,21.383209 q 0,0.753906 -0.589844,1.253906 -0.585938,0.5 -1.476563,0.5 -0.945312,0 -1.507812,-0.488281 -0.558594,-0.488281 -0.558594,-1.25 0,-0.484375 0.28125,-0.875 0.28125,-0.394531 0.792969,-0.625 v -0.02344 q -0.46875,-0.25 -0.695313,-0.546875 -0.222656,-0.296875 -0.222656,-0.742188 0,-0.65625 0.539063,-1.09375 0.539062,-0.4375 1.371093,-0.4375 0.871094,0 1.390625,0.417969 0.519532,0.417969 0.519532,1.0625 0,0.394531 -0.246094,0.777344 -0.246094,0.378906 -0.722656,0.59375 v 0.02344 q 0.546875,0.234375 0.835937,0.578125 0.289063,0.34375 0.289063,0.875 z m -0.925782,-2.839844 q 0,-0.417968 -0.324218,-0.664062 -0.320313,-0.25 -0.820313,-0.25 -0.492187,0 -0.808594,0.234375 -0.3125,0.234375 -0.3125,0.632812 0,0.28125 0.15625,0.488282 0.160157,0.203125 0.480469,0.363281 0.144531,0.07031 0.414063,0.183594 0.273437,0.113281 0.53125,0.1875 0.386718,-0.257813 0.535156,-0.535157 0.148437,-0.277343 0.148437,-0.640625 z m 0.121094,2.914063 q 0,-0.359375 -0.160156,-0.574219 -0.15625,-0.21875 -0.617188,-0.4375 -0.183593,-0.08594 -0.402343,-0.160156 -0.21875,-0.07422 -0.582032,-0.207031 -0.351562,0.191406 -0.566406,0.519531 -0.210937,0.328125 -0.210937,0.742187 0,0.527344 0.363281,0.871094 0.363281,0.34375 0.921875,0.34375 0.570312,0 0.910156,-0.292969 0.34375,-0.292968 0.34375,-0.804687 z M 12,11 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 m 0.5,-9 c 4.5,0 4.61,3.57 2.25,4.75 -0.99,0.49 -1.43,1.54 -1.62,2.47 0.48,0.2 0.9,0.51 1.22,0.91 3.7,-2 7.68,-1.21 7.68,2.37 0,4.5 -3.57,4.6 -4.75,2.23 -0.5,-0.99 -1.56,-1.43 -2.49,-1.62 -0.2,0.48 -0.51,0.89 -0.91,1.23 C 15.87,18.03 15.08,22 11.5,22 7,22 6.91,18.42 9.27,17.24 10.25,16.75 10.69,15.71 10.89,14.79 10.4,14.59 9.97,14.27 9.65,13.87 5.96,15.85 2,15.07 2,11.5 2,7 5.56,6.89 6.74,9.26 7.24,10.25 8.29,10.68 9.22,10.87 9.41,10.39 9.73,9.97 10.14,9.65 8.15,5.96 8.94,2 12.5,2 Z"
  },
  "fan-speed-9": {
    "keywords": ["fan", "speed", "9"],
    "path": "m 21.243032,19.74649 q 0,0.761719 -0.175781,1.382813 -0.171875,0.621094 -0.523437,1.058594 -0.355469,0.445312 -0.890625,0.6875 -0.535157,0.242187 -1.257813,0.242187 -0.203125,0 -0.382812,-0.02344 -0.179688,-0.01953 -0.320313,-0.06641 v -0.746093 h 0.03906 q 0.113281,0.05859 0.320312,0.113281 0.207031,0.05078 0.460938,0.05078 0.863281,0 1.351562,-0.515625 0.492188,-0.519531 0.570313,-1.429687 -0.363282,0.21875 -0.683594,0.3125 -0.320313,0.09375 -0.699219,0.09375 -0.359375,0 -0.652344,-0.07031 -0.289062,-0.07031 -0.582031,-0.273437 -0.34375,-0.238282 -0.519531,-0.605469 -0.171875,-0.367188 -0.171875,-0.878906 0,-0.890625 0.585937,-1.449219 0.585938,-0.558594 1.429688,-0.558594 0.421875,0 0.78125,0.132813 0.359375,0.128906 0.628906,0.390625 0.332031,0.324218 0.511719,0.835937 0.179687,0.507813 0.179687,1.316406 z M 20.45397,19.578522 q 0,-0.605469 -0.125,-0.972657 -0.125,-0.367187 -0.34375,-0.570312 -0.183594,-0.175781 -0.394531,-0.25 -0.210938,-0.07813 -0.457032,-0.07813 -0.5625,0 -0.890625,0.351562 -0.324218,0.351563 -0.324218,0.988282 0,0.371093 0.105468,0.605468 0.105469,0.234375 0.355469,0.410157 0.175781,0.121093 0.386719,0.164062 0.210937,0.03906 0.46875,0.03906 0.304687,0 0.617187,-0.08203 0.3125,-0.08203 0.585938,-0.238281 0.0039,-0.08203 0.0078,-0.160156 0.0078,-0.08203 0.0078,-0.207031 z M 12,11 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 m 0.5,-9 c 4.5,0 4.61,3.57 2.25,4.75 -0.99,0.49 -1.43,1.54 -1.62,2.47 0.48,0.2 0.9,0.51 1.22,0.91 3.7,-2 7.68,-1.21 7.68,2.37 0,4.5 -3.57,4.6 -4.75,2.23 -0.5,-0.99 -1.56,-1.43 -2.49,-1.62 -0.2,0.48 -0.51,0.89 -0.91,1.23 C 15.87,18.03 15.08,22 11.5,22 7,22 6.91,18.42 9.27,17.24 10.25,16.75 10.69,15.71 10.89,14.79 10.4,14.59 9.97,14.27 9.65,13.87 5.96,15.85 2,15.07 2,11.5 2,7 5.56,6.89 6.74,9.26 7.24,10.25 8.29,10.68 9.22,10.87 9.41,10.39 9.73,9.97 10.14,9.65 8.15,5.96 8.94,2 12.5,2 Z"
  },
  "floor-lamp": {
    "keywords": [],
    "path": "M7.5 2 10 9h4l2.5-7h-9zm3.79 8L6.92 22h1.064l3.516-9.656V22h1v-9.65L16.012 22h1.064L12.71 10h-1.42z"
  },
  "floor-lamp-dual": {
    "keywords": [],
    "path": "M8.928 1.984 2 5.982v.002l5.666 4.81 2.598-1.5-1.336-7.31zm6.187 0L13.78 9.297l2.6 1.5 5.664-4.813v-.002l-6.928-3.998zm-4.535 8.862-1.732 1L11 15.572V20H8v2h8v-2h-3v-4.352l2.195-3.802-1.732-1-1.442 2.496-1.441-2.496z"
  },
  "homeassistant": {
    "keywords": [],
    "path": "M12 2a2 2 0 0 0-1.4.6l-7.9 7.8c-.4.5-.7 1.1-.7 1.8V20c0 1.1.9 2 2 2h7l-3-2.9a1.8 1.8 0 1 1 1.1-1l2.2 2v-9.6a1.8 1.8 0 0 1-1-1.6A1.8 1.8 0 0 1 12 7.2a1.8 1.8 0 0 1 1.8 1.7 1.8 1.8 0 0 1-1 1.6v5.6l2-2a1.7 1.7 0 1 1 1.1 1l-3.2 3.2V22H20a2 2 0 0 0 2-2v-7.8c0-.7-.3-1.3-.7-1.8l-7.9-7.8A2 2 0 0 0 12 2z"
  },
  "led-strip": {
    "keywords": [],
    "path": "M2.164 2 1 6.346l19.801 5.306.648-2.414a1.995 1.995 0 0 0-1.414-2.449l-17.87-4.79zM4.07 3.572a1.25 1.25 0 0 1 1.135 1.572A1.25 1.25 0 1 1 4.07 3.573zm3.623.971a1.25 1.25 0 1 1-.148 2.496 1.25 1.25 0 0 1 .148-2.496zm3.864 1.035a1.25 1.25 0 0 1 1.135 1.572 1.25 1.25 0 1 1-1.135-1.572zm3.623.97a1.25 1.25 0 1 1-.148 2.496 1.25 1.25 0 0 1 .148-2.495zm3.62.972a1.25 1.25 0 0 1 1.135 1.572 1.25 1.25 0 1 1-1.134-1.572zm-7.378 2.619L5.06 11.848l7.516 2.013 6.361-1.709-7.515-2.013zm-8.225 2.209-.646 2.414a1.995 1.995 0 0 0 1.414 2.449l17.87 4.79L23 17.653 3.197 12.348zm2.149 1.636a1.25 1.25 0 0 1 1.135 1.572 1.25 1.25 0 1 1-1.135-1.572zm3.623.971a1.25 1.25 0 1 1-.148 2.496 1.25 1.25 0 0 1 .148-2.496zm3.62.97a1.25 1.25 0 0 1 1.135 1.572 1.25 1.25 0 1 1-1.134-1.571zm3.864 1.036a1.25 1.25 0 0 1 1.135 1.572 1.25 1.25 0 1 1-1.135-1.572zm3.623.97a1.25 1.25 0 1 1-.148 2.496 1.25 1.25 0 0 1 .148-2.495z"
  },
  "light-string": {
    "keywords": [],
    "path": "M2 5.847v.8c.758.383 1.51.786 2.297 1.104l-.518 1.932 2.319.62.508-1.896c1.177.275 2.545.5 4.195.57v1.975h2.398V8.978a22.431 22.431 0 0 0 4.196-.57l.507 1.896 2.319-.621-.518-1.932c.718-.275 1.562-.699 2.297-1.104v-.7s-.89.494-2.498 1.109C17.893 7.67 15.426 8.29 12 8.29c-3.425 0-5.893-.62-7.502-1.234C2.89 6.44 2 5.846 2 5.846zm18.533 4.594a.398.398 0 0 0-.105.013l-2.319.623a.4.4 0 0 0-.283.489l.234.873a2.801 2.801 0 0 0-.566 2.529 2.8 2.8 0 1 0 3.656-3.357l-.234-.874a.4.4 0 0 0-.383-.296zm-17.08.002a.4.4 0 0 0-.371.295l-.233.873a2.8 2.8 0 0 0 .227 5.337 2.8 2.8 0 0 0 2.863-4.51l.235-.872a.4.4 0 0 0-.283-.489l-2.319-.623a.399.399 0 0 0-.119-.011zm7.348 1.31a.4.4 0 0 0-.4.4v.905A2.798 2.798 0 0 0 12 18.153a2.798 2.798 0 0 0 1.6-5.096v-.904a.4.4 0 0 0-.4-.4z"
  },
  "lightbulb-top": {
    "keywords": [],
    "path": "M12 22a7 7 0 0 1-7-7c0-2.38 1.19-4.47 3-5.74V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2.26c1.81 1.27 3 3.36 3 5.74a7 7 0 0 1-7 7M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9z"
  },
  "lightbulb-top-outline": {
    "keywords": [],
    "path": "M12 22a7 7 0 0 0 7-7c0-2.38-1.19-4.47-3-5.74V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2.26C6.19 10.53 5 12.62 5 15a7 7 0 0 0 7 7M9 3v1h6V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1m3 17a5 5 0 0 1-5-5c0-2.05 1.23-3.81 3-4.58V8h4v2.42c1.77.77 3 2.53 3 4.58a5 5 0 0 1-5 5z"
  },
  "matter": {
    "keywords": [],
    "path": "m12 1.2-1.236.712v6.21a6.998 6.998 0 0 1-3.225-1.493L5.11 8.03a9.683 9.683 0 0 0 13.782 0L16.46 6.63a6.999 6.999 0 0 1-3.225 1.492V1.912L12 1.2zm-8.527 9.667v2.807a7 7 0 0 1 2.906 2.045L1 18.824v1.426l1.236.715 5.377-3.106a7 7 0 0 1 .32 3.54l2.428 1.402a9.68 9.68 0 0 0-6.888-11.934zm17.055.002a9.676 9.676 0 0 0-6.889 11.932l2.428-1.403a7 7 0 0 1 .32-3.539l5.377 3.106L23 20.25v-1.426l-5.379-3.105a7 7 0 0 1 2.907-2.045v-2.805z"
  },
  "mirror-lamp": {
    "keywords": [],
    "path": "M4 4c-1.108 0-2 .892-2 2v12c0 1.108.892 2 2 2h16c1.108 0 2-.892 2-2V6c0-1.108-.892-2-2-2zm0 2h2v12H4zm14 0h2v12h-2z"
  },
  "nas": {
    "keywords": [],
    "path": "M4 2c-1.108 0-2 .892-2 2v14c0 1.108.892 2 2 2v2h2v-2h12v2h2v-2c1.108 0 2-.892 2-2V4c0-1.108-.892-2-2-2zm0 2h10v14H4zm11 0h5v14h-5zm1.95 1.25a.75.75 0 1 0 0 1.5h1a.75.75 0 1 0 0-1.5zm0 3a.75.75 0 1 0 0 1.5h1a.75.75 0 1 0 0-1.5z"
  },
  "nginx-proxy-manager": {
    "keywords": [],
    "path": "m12 1-1.695.978v.566C4.43 3.524.61 9.269 1.977 15.066l.928-.536c-1.02-5.075 2.31-10.004 7.4-10.95v.354l1.695.98 1.695-.978V1.978zm2.955 1.837v1.071c4.904 1.648 7.513 6.99 5.797 11.87l-.323-.187-1.695.978v1.957l1.695.978 1.695-.978V16.57l-.473-.273c2.078-5.579-.993-11.752-6.696-13.46zM12 6.079 6.264 9.39v6.623L12 19.325l5.736-3.311V9.39zm0 3.286 2.89 1.668v3.337L12 16.038 9.11 14.37v-3.337zm-8.412 6.226-1.695.978v1.957l1.695.978.457-.264c3.791 4.613 10.699 5.045 15.035.94l-.927-.535c-3.886 3.443-9.84 3.027-13.21-.923l.34-.196V16.57z"
  },
  "night-light": {
    "keywords": [],
    "path": "M12 2A10 10 0 0 0 2 12a10 10 0 0 0 2.947 7.053L2 22h20l-2.947-2.947A10 10 0 0 0 22 12 10 10 0 0 0 12 2zm0 1.5a8.5 8.5 0 0 1 8.5 8.5 8.5 8.5 0 0 1-8.5 8.5A8.5 8.5 0 0 1 3.5 12 8.5 8.5 0 0 1 12 3.5zM9.533 6.533A6 6 0 0 0 6 12a6 6 0 0 0 6 6 6 6 0 0 0 5.467-3.533A6 6 0 0 1 15 15a6 6 0 0 1-6-6 6 6 0 0 1 .533-2.467z"
  },
  "node-red": {
    "keywords": [],
    "path": "M5.42 11.292a1.784 1.784 0 0 0-1.8-1.796H1v1.228h2.62c.338 0 .621.245.621.583v1.78a.64.64 0 0 1-.621.633H1v1.179h2.62a1.8 1.8 0 0 0 1.8-1.811v-.831c4.14.059 5.345 1.136 6.662 2.288 1.269 1.11 2.692 2.302 6.4 2.332v.408c0 1.001.82 1.838 1.821 1.838H23v-1.277h-2.697c-.338 0-.593-.223-.593-.561v-1.78a.59.59 0 0 1 .593-.605H23v-1.179h-2.697c-1.001 0-1.82.783-1.821 1.784v.422c-3.504-.012-4.5-.983-5.774-2.098-1.087-.951-2.365-1.996-5.181-2.377l.071-.063c.542-.497.834-1.098 1.12-1.616s.555-.951.996-1.254c.358-.245.866-.428 1.647-.462v.416c0 1.001.807 1.86 1.808 1.86h7.235c1.001 0 1.81-.859 1.81-1.86V6.69a1.81 1.81 0 0 0-1.81-1.811H13.17c-1.001 0-1.808.81-1.808 1.811v.413c-.943.038-1.658.267-2.185.629-.64.439-.993 1.039-1.291 1.579s-.55 1.024-.931 1.374c-.332.304-.79.539-1.535.626zm7.75-5.185h7.235a.56.56 0 0 1 .582.583v1.78a.56.56 0 0 1-.582.583H13.17c-.338 0-.629-.245-.629-.583V6.69c0-.338.291-.583.629-.583z"
  },
  "open-wrt": {
    "keywords": [],
    "path": "M6.49 9.967a6.784 6.784 0 0 0-1.31 4.013c0 3.76 3.06 6.82 6.82 6.82 3.76 0 6.82-3.06 6.82-6.82a6.78 6.78 0 0 0-1.31-4.013l1.568-1.569a8.972 8.972 0 0 1 1.942 5.582c0 4.973-4.046 9.02-9.02 9.02-4.973 0-9.02-4.047-9.02-9.02 0-2.106.728-4.045 1.942-5.582zm9.086.437-1.555 1.555A2.85 2.85 0 0 0 12 11.12a2.85 2.85 0 0 0-2.021.839l-1.555-1.555A5.045 5.045 0 0 1 12 8.92c1.395 0 2.66.568 3.576 1.484m2.799-2.799L16.82 9.16a6.799 6.799 0 0 0-4.82-2c-1.88 0-3.585.765-4.82 2L5.625 7.605A8.993 8.993 0 0 1 12 4.96a8.991 8.991 0 0 1 6.375 2.645m2.8-2.799-1.556 1.555A10.744 10.744 0 0 0 12 3.201a10.746 10.746 0 0 0-7.619 3.16L2.826 4.806A12.941 12.941 0 0 1 12 1c3.578 0 6.823 1.456 9.174 3.806M12 12.484c.825 0 1.496.671 1.496 1.496s-.671 1.496-1.496 1.496a1.498 1.498 0 0 1-1.496-1.496c0-.825.671-1.496 1.496-1.496"
  },
  "outdoor-lamp": {
    "keywords": [],
    "path": "M12.5 2 12 4l-2 2.305L5 9h2l2.5 9 2.5 2 .5 2h1l.5-2 2.5-2L19 9h2l-5-2.695L14 4l-.5-2zM9 9h8l-2.223 8h-3.554zm-6 5v8h8.5l-.5-2H8l-3-3v-3z"
  },
  "outdoor-lamp-solo": {
    "keywords": [],
    "path": "m11.45 1-.55 2.2-2.2 2.535L3.2 8.7h2.2l2.75 9.9 2.75 2.2.55 2.2h1.1l.55-2.2 2.75-2.2 2.75-9.9h2.2l-5.5-2.965L13.1 3.2 12.55 1zM7.6 8.7h8.8l-2.445 8.8h-3.91z"
  },
  "outdoor-lamp-variant": {
    "keywords": [],
    "path": "M3 3.5V12h2V8.73c.52-.15 1.11-.34 1.426-.515.67-.368 1.035-.841 1.357-1.48.108-.215.168-.372.28-.725.28-.889.51-1.407.996-1.719.389-.25.658-.365 1.289-.365.485 0 .695.106 1.076.332.781.463 1.18 1.283 1.275 2.24.02.787 0 2.171 0 3.002L6.301 14H21l-6.43-4.5c.006-.836.03-2.573 0-3.354-.05-.353-.15-.603-.25-.908-.531-1.621-1.673-2.84-3.271-3.156-.336-.066-.236-.074-.71-.074-.508.001-.49.016-.906.1-1.624.327-2.52 1.422-3.109 3.308-.11.354-.149.438-.27.615-.097.141-.198.25-.322.344A3.174 3.174 0 0 1 5 6.793V3.5zM10.65 15c0 1.707-.005 3.417.014 5.123.103.927 1.062 1.657 2.428 1.85a5.59 5.59 0 0 0 1.119 0c1.086-.155 1.929-.652 2.271-1.334.079-.158.134-.34.157-.532.027-1.7.011-3.405.011-5.107z"
  },
  "path-light": {
    "keywords": [],
    "path": "M12 2 4 8h16zm-1 8v11l1 1 1-1V10z"
  },
  "phoscon": {
    "keywords": [],
    "path": "M5.485 18.534c-.055 2.44.055 3.11-.35 3.581-.763.934-2.295.876-2.958-.141-.321-.492-.288-1.011-.289-1.57v-9.927c.001-.639-.032-1.171.381-1.712.797-1.045 2.434-.898 3.059.135.25.42.169.75.203 1.721.009.681.194 1.711.419 2.302 1.213 3.187 4.8 4.922 8.024 3.784 2.057-.928 3.698-2.548 4.106-4.647.672-3.665-2.224-7.295-5.977-7.338-1.201-.013-2.253.174-3.309.786-.724.42-1.581 1.292-2.302 1.434-1.358.269-2.368-.919-2.109-2.22.17-.85 1.004-1.478 1.678-1.951C7.779 1.564 10.29.85 12.391.994c5.557.38 9.561 4.621 9.496 10.202-.06 5.106-4.372 9.487-9.496 9.496-3.029.005-4.393-.394-6.906-2.158z"
  },
  "plex": {
    "keywords": [],
    "path": "m12.15 22h-7l6.7-10-6.7-10h7l6.7 10z"
  },
  "qbittorrent": {
    "keywords": [],
    "path": "M13.377 2v15.195h1.162l.342-1.377h.117c.39.534.873.931 1.445 1.191.58.254 1.218.381 1.914.381 1.394 0 2.481-.485 3.262-1.455.788-.976 1.182-2.344 1.182-4.101 0-1.758-.39-3.116-1.172-4.073-.775-.963-1.865-1.445-3.272-1.445-1.484 0-2.604.534-3.359 1.602h-.078c.052-.658.078-1.4.078-2.227V2h-1.621zM5.633 6.297c-1.393 0-2.48.491-3.262 1.475-.781.983-1.172 2.35-1.172 4.101 0 1.738.388 3.093 1.162 4.063.775.97 1.853 1.455 3.233 1.455 1.504 0 2.63-.544 3.379-1.631H9.1c-.072.455-.108 1.009-.108 1.66V22h1.621V6.492H9.334L9.1 7.957h-.088c-.788-1.107-1.914-1.66-3.38-1.66zm.185 1.357c1.1 0 1.905.33 2.413.987.507.657.761 1.735.761 3.232v.361c-.032 1.374-.296 2.35-.79 2.93-.496.58-1.283.87-2.364.87-.977 0-1.716-.352-2.217-1.055-.495-.71-.742-1.739-.742-3.086 0-1.348.25-2.39.752-3.125.508-.743 1.237-1.114 2.187-1.114zm12.305.02c1.023 0 1.778.342 2.266 1.025.488.684.732 1.722.732 3.115 0 1.361-.244 2.406-.732 3.135-.488.723-1.23 1.084-2.227 1.084-1.106 0-1.91-.322-2.412-.967-.5-.65-.752-1.728-.752-3.232 0-1.504.245-2.572.733-3.203.488-.638 1.286-.957 2.392-.957z"
  },
  "radarr": {
    "keywords": [],
    "path": "M6.463 2C4.72 2.011 3.033 3.246 3 5.885v12.109c-.016 1.227.963 1.851 2.195 1.717V5.254c.01-.73 1.004-1.404 1.668-1.01l12.205 7.027c.917.623 1.371 1.239 1.508 2.318a3.444 3.444 0 0 0-1.018-4.457L8.726 2.735S7.616 1.99 6.463 2zm.732 4.727V17.37l9.217-5.32zm11.812 6.132-12.693 7.3a3.105 3.105 0 0 1-2.619.273c.753 1.231 2.74 2.028 4.287 1.275l10.686-6.092c.927-.6 1.095-1.674.34-2.756z"
  },
  "roborock": {
    "keywords": [],
    "path": "M12 2C7.342 2 3.44 5.19 2.328 9.5H9.06A3.01 3.01 0 0 1 12 7.1a3.01 3.01 0 0 1 2.94 2.4h6.732C20.56 5.19 16.658 2 12 2zm0 6.1c-1.11 0-2 .89-2 2 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-1.11-.89-2-2-2zm-9.875 2.4C2.051 10.99 2 11.489 2 12c.003.584.057 1.166.162 1.74l2.535-.451c.465 2.165 1.752 4.026 3.553 5.139a7.096 7.096 0 0 0 7.5 0c1.802-1.113 3.089-2.976 3.553-5.14l2.543.452A10 10 0 0 0 22 12c0-.511-.05-1.01-.125-1.5h-6.916c-.199 1.462-1.445 2.6-2.959 2.6s-2.76-1.138-2.959-2.6H2.125zm17.846 4.43a8.5 8.5 0 0 1-7.97 5.57 8.5 8.5 0 0 1-7.971-5.568l-1.495.267A10 10 0 0 0 12 22a10 10 0 0 0 9.463-6.803l-1.492-.267z"
  },
  "smoke-detector": {
    "keywords": [],
    "path": "M2 2v4.324a2.16 2.16 0 0 0 1.75 2.123C4.03 10.386 4.79 13 6.846 13h10.309c2.054 0 2.816-2.613 3.095-4.553A2.16 2.16 0 0 0 22 6.324V2H2zm3.25 6.5H7l.6 3h-.754c-.983 0-1.335-1.406-1.596-3zm3.25 0h2.75v3H9.1l-.6-3zm4.25 0h2.75l-.6 3h-2.15v-3zm4.25 0h1.75c-.261 1.594-.62 2.855-1.594 3h-.754l.598-3zm-6.941 5.977-1.506.877s-.33.187-.602.54c-.271.354-.497.969-.24 1.622.276.7.59 1.114.594 1.332.002.127-.031.277-.332.584l-1.807 1.843 2.363-1.035c.07-.03.088-.082.153-.115l.004.008c.005-.005.002-.01.007-.016.387-.198.728-.415.922-.697.229-.332.3-.717.27-1.05-.06-.67-.434-1.188-.621-1.497-.243-.4-.016-.853-.016-.853l.81-1.543zm3.908 0-1.504.877s-.375.215-.684.617c-.308.402-.565 1.086-.273 1.826.253.642.58 1.093.672 1.396.046.152.052.251.011.387s-.146.324-.394.576L9.988 22l2.366-1.035c.07-.03.087-.08.152-.113l.004.006c.006-.007.007-.013.013-.02.46-.232.852-.487 1.075-.81.257-.375.336-.804.302-1.182-.067-.757-.499-1.36-.722-1.729-.314-.518-.02-1.1-.02-1.1l.809-1.54zm3.867.002-1.502.875s-.33.187-.602.54c-.271.354-.499.969-.242 1.622.22.554.495.94.567 1.175.035.119.04.184.01.284-.03.1-.111.249-.315.457l-1.807 1.844 2.366-1.036c.069-.03.086-.082.15-.115l.006.008c.007-.007.007-.015.013-.022.383-.197.722-.41.915-.691.228-.332.3-.717.271-1.05-.06-.669-.436-1.188-.623-1.497-.242-.4-.016-.855-.016-.855l.809-1.54z"
  },
  "sonarr": {
    "keywords": [],
    "path": "M12 1a11 11 0 0 0-6.7 2.3l1.3 1.3c3 3 7.8 3 10.8 0l1.3-1.3A11 11 0 0 0 12 1zm7.6 3L17 6.8l-.2-.2-1.9 1.8.8.8 1.8-1.9-.2-.2L20 4.4a11 11 0 0 0-.4-.3zM4.4 4l-.3.4L6.7 7l-.2.2 1.8 1.9.8-.8-1.9-1.8-.2.2L4.4 4zm16.3 1.3-1.3 1.3c-3 3-3 7.8 0 10.8l1.3 1.3a11 11 0 0 0 0-13.4zm-17.4 0a11 11 0 0 0 0 13.4l1.3-1.3c3-3 3-7.8 0-10.8L3.3 5.3zM12 8.8A3.2 3.2 0 0 0 8.8 12a3.2 3.2 0 0 0 3.2 3.2 3.2 3.2 0 0 0 3.2-3.2A3.2 3.2 0 0 0 12 8.8zm3.6 6.1-.7.8 1.9 1.8.2-.2 2.6 2.6.3-.3-2.6-2.6.2-.2-1.9-1.9zm-7.3 0-1.8 1.9.2.2L4 19.6l.3.3L7 17.3l.2.2 1.9-1.8-.8-.8zm3.9 2.2a7.6 7.6 0 0 0-5.6 2.3l-1.3 1.3a11 11 0 0 0 13.4 0l-1.3-1.3a7.6 7.6 0 0 0-5.2-2.3z"
  },
  "spot-bulb": {
    "keywords": [],
    "path": "m2 2v2h20v-2h-20zm2 4a8 8 0 0 0 4 6.9277v2.0723c0 1.108 0.892 2 2 2h4c1.108 0 2-0.892 2-2v-2.0723a8 8 0 0 0 4-6.9277h-8-8zm5 13v3h2v-3h-2zm4 0v3h2v-3h-2z"
  },
  "spot-bulb-top": {
    "keywords": [],
    "path": "m2 22v-2h20v2zm2-4a8 8 0 0 1 4-6.9277v-2.0723c0-1.108 0.892-2 2-2h4c1.108 0 2 0.892 2 2v2.0723a8 8 0 0 1 4 6.9277h-8zm5-13v-3h2v3zm4 0v-3h2v3z"
  },
  "stairs": {
    "keywords": [],
    "path": "M22 2 2 14v1.5l1.5-.9V17H5v-3.3l14-8.4V8h1.5V4.4l1.5-.9V2zm-5 8v3h-5v3H7v3H2v3h5l15-9v-3h-5z"
  },
  "table-lamp-variant": {
    "keywords": [],
    "path": "M10 2 7.5 9h9L14 2zm1.29 8L6.92 22h1.064l3.516-9.656V22h1v-9.65L16.012 22h1.064L12.71 10h-1.42z"
  },
  "tautulli": {
    "keywords": [],
    "path": "m19.705 2c-1.2674 0-2.2949 1.024-2.2949 2.2871 0 0.622 0.24997 1.1853 0.6543 1.5977l-5.0859 7.1621c-0.2829-0.12414-0.59488-0.19531-0.92383-0.19531-1.2674 0-2.2949 1.024-2.2949 2.2871 0 0.22486 0.032991 0.44319 0.09375 0.64844l-3.8652 2.3828c-0.41956-0.45726-1.0225-0.74414-1.6934-0.74414-1.2674 0-2.2949 1.0242-2.2949 2.2871 0 1.2629 1.0275 2.2871 2.2949 2.2871 1.2675 0 2.2949-1.0242 2.2949-2.2871 0-0.21844-0.030526-0.42895-0.087891-0.62891l3.8711-2.3887c0.41913 0.44963 1.0173 0.73047 1.6816 0.73047 1.2675 0 2.2949-1.0242 2.2949-2.2871 0-0.55729-0.20086-1.0681-0.5332-1.4648l5.1328-7.2266c0.23677 0.08224 0.49124 0.12695 0.75586 0.12695 1.2675 0 2.2949-1.0241 2.2949-2.2871-8.7e-5 -1.2631-1.0275-2.2871-2.2949-2.2871zm-15.41 5.4473c-1.2674 0-2.2949 1.0241-2.2949 2.2871 0 1.263 1.0275 2.2871 2.2949 2.2871 0.39032 0 0.75844-0.098281 1.0801-0.26953l3.2188 3.6367 0.18555-0.11523c-0.001974-0.046296-0.019531-0.088056-0.019531-0.13477 0-0.3385 0.051465-0.66649 0.14844-0.97461l-2.7461-3.1016c0.26906-0.37468 0.42773-0.83243 0.42773-1.3281 0-1.2631-1.0274-2.2871-2.2949-2.2871zm15.41 9.9785c-0.91242 0-1.7004 0.53031-2.0703 1.2988l-3.2871-0.47461c-0.002145-0.23215-0.038844-0.4553-0.10547-0.66602-0.58412 0.52121-1.3505 0.8418-2.1875 0.8418-0.63393 0-1.1953-0.22964-1.7012-0.54297l-0.5918 0.36524c-8.2e-5 0.007962-0.0019532 0.015456-0.0019532 0.023437 0 1.2631 1.0274 2.2871 2.2949 2.2871 0.9072 0 1.6901-0.52561 2.0625-1.2871l3.293 0.47656c0.01915 1.2465 1.0393 2.252 2.2949 2.252 1.2674 0 2.2949-1.0242 2.2949-2.2871 0-1.2629-1.0275-2.2871-2.2949-2.2871z"
  },
  "thermostat": {
    "keywords": [],
    "path": "M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm3.5 1.938L9.402 10.5a3 3 0 0 0 0 3A3 3 0 0 0 12 15a3 3 0 0 0 2.598-1.5l.902-7.563z"
  },
  "transmission": {
    "keywords": [],
    "path": "M10.764 1a.793.793 0 0 0-.713.455H6.728c-.721 0-1.373.112-1.867.308a1.925 1.925 0 0 0-.616.365c-.16.15-.275.347-.275.57v1.046c0 .222.115.42.275.57.16.15.37.267.616.365.494.195 1.146.307 1.867.307h3.248v2.51H4.96c-.74-.028-1.426.573-1.494 1.339-.442 3.632-1.1 7.284-1.437 10.939l-.001.01v1.549c.019.897.62 1.54 1.316 1.663l.022.004H20.71c.3-.007.61-.112.855-.322.244-.21.415-.54.405-.935v-1.981L20.404 9.127v-.006c-.148-.753-.77-1.53-1.674-1.623l-.013-.001h-4.693v-2.51h3.248c.72 0 1.373-.113 1.867-.308a1.92 1.92 0 0 0 .615-.366c.16-.15.276-.347.276-.57V2.699c0-.222-.116-.42-.276-.57a1.92 1.92 0 0 0-.615-.365c-.494-.196-1.146-.308-1.867-.308h-3.323A.793.793 0 0 0 13.235 1zm.305.498h1.861c.326 0 .594.33.594.73v11.029c0 .4-.268.73-.594.73H11.07c-.326 0-.594-.33-.594-.73V2.229c0-.4.268-.73.594-.73zM6.292 8.944h3.684v.689l-.996 5.803H6.854l4.862 3.122 5.43-3.122h-2.208l-.915-5.867v-.625h3.226c.663-.02 1.29.398 1.475.983l.006.02 1.213 8.1v.014c.016.404-.055.747-.234 1.005a.937.937 0 0 1-.807.398l-13.65.05H5.24l-.014-.001c-.33-.036-.635-.166-.85-.404-.217-.237-.332-.572-.324-.962v-.011l.954-8.03.005-.018c.082-.3.22-.578.434-.791.213-.213.509-.354.848-.353z"
  },
  "xmas-candle-bridge": {
    "keywords": [],
    "path": "M12 2a.748.748 0 0 0-.75.75v7L12 9l.75.75v-7A.748.748 0 0 0 12 2zM9 5a.748.748 0 0 0-.75.75v6.998l1.5-1.5V5.75A.748.748 0 0 0 9 5zm6 0a.748.748 0 0 0-.75.75v5.5l1.5 1.5v-7A.748.748 0 0 0 15 5zM6 8a.748.748 0 0 0-.75.75v7l1.5-1.5v-5.5A.748.748 0 0 0 6 8zm12 0a.748.748 0 0 0-.75.75v5.756l1.5 1.5V8.75A.748.748 0 0 0 18 8zM3 11a.748.748 0 0 0-.75.75v7l1.5-1.5v-5.5A.748.748 0 0 0 3 11zm9 0-2.121 2.121L1 22h4.244L12 15.242 18.756 22H23l-8.879-8.879L12 11zm9 0a.748.748 0 0 0-.75.75v5.5l1.5 1.5v-7A.748.748 0 0 0 21 11z"
  },
  "xmas-star": {
    "keywords": [],
    "path": "m12 22-1.643-7.109-6.583 3.148 4.533-5.717-6.564-3.184 7.296-.02L7.435 2 12 7.69 16.565 2 14.96 9.118l7.296.02-6.565 3.184 4.533 5.717-6.582-3.147z"
  }
};

async function getIcon(name) {
  return {path: BHA_ICONS_MAP[name]?.path};
}
async function getIconList() {
  return Object.entries(BHA_ICONS_MAP).map(([icon, content]) => ({
    name: icon,
    keywords: content.keywords,
  }));
}

window.customIcons = window.customIcons || {};
window.customIcons["bha"] = { getIcon, getIconList };

window.customIconsets = window.customIconsets || {};
window.customIconsets["bha"] = getIcon;
