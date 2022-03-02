"use strict";
var AudioLevel;
(function (AudioLevel) {
    AudioLevel[AudioLevel["min"] = 0] = "min";
    AudioLevel[AudioLevel["max"] = 1] = "max";
    AudioLevel[AudioLevel["medium"] = 2] = "medium";
})(AudioLevel || (AudioLevel = {}));
let currentAudio = AudioLevel.max;
//# sourceMappingURL=enums.js.map