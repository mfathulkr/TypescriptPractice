"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./swagger"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(body_parser_1.default.json());
const users = [];
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt_1.default.hashSync(password, 10);
    const newUser = {
        id: Date.now().toString(),
        username,
        email,
        password: hashedPassword,
    };
    users.push(newUser);
    res.status(201).json({ message: 'User registered successfully' });
});
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (!user || !bcrypt_1.default.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jsonwebtoken_1.default.sign({ userId: user.id }, 'your-secret-key', {
        expiresIn: '1h',
    });
    res.status(200).json({ token });
});
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
