"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/") ||
        file.mimetype.startsWith("audio/") ||
        file.mimetype.startsWith("video/")) {
        cb(null, true);
    }
    else {
        cb(new Error("Only images, audio, and video files are allowed!"), false);
    }
};
exports.upload = (0, multer_1.default)({ storage, fileFilter });
//# sourceMappingURL=upload.js.map