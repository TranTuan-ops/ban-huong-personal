# 🎨 Frontend Client - Bản Hương E-Commerce

This project is the frontend client for the **Bản Hương** essential oil e-commerce platform, bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and customized with [@craco/craco](https://craco.js.org/).

---

## 🚀 Available Scripts

In the `front-end` project directory, you can run:

### `npm start`

Runs the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will automatically reload when you make edits.<br />
You will also see any lint and compile errors in the console.

---

### `npm test`

Launches the test runner in interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

---

### `npm run build`

Builds the application for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and filenames include hashes.<br />
Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for details.

---

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you cannot go back!**

Copies all configuration files and transitive dependencies (Webpack, Babel, ESLint, etc.) directly into your project so you have full control over them. Most medium-sized projects do not need to eject thanks to CRACO.

---

## ⚙️ Environment Variables

Create or update [.env.local](file:///.env.local) in the `front-end` directory:

```env
REACT_APP_API_URL=http://localhost:5000
```

---

## 📦 Key Dependencies & Libraries

| Package Name | Version | Description |
| :--- | :--- | :--- |
| **react** / **react-dom** | ^19.1.0 | Core React 19 UI framework |
| **@craco/craco** | ^7.1.0 | CRA configuration override without ejecting |
| **react-router-dom** | ^7.7.0 | Declarative client-side routing |
| **antd** | ^5.26.6 | Comprehensive Ant Design UI component library |
| **axios** | ^1.12.2 | Promise-based HTTP client for API requests |
| **recharts** | ^3.2.1 | Composable charting library for admin analytics dashboards |
| **@payos/payos-checkout** | ^1.0.8 | Embedded PayOS payment checkout integration |
| **@ckeditor/ckeditor5-react** | ^11.0.0 | Rich text WYSIWYG editor for admin blog management |
| **@react-oauth/google** | ^0.12.2 | Google OAuth 2.0 authentication integration |
| **i18next** / **react-i18next** | ^21.10.0 | Internationalization framework for multi-language support (EN / VI) |
| **socket.io-client** | ^4.8.1 | Real-time WebSocket connection client |
| **lucide-react** / **react-icons** | Latest | Modern SVG icon sets |
| **react-dropzone** | ^14.3.8 | Drag-and-drop file/image upload support |
| **qrcode.react** | ^4.2.0 | Dynamic QR code generator component |
| **jwt-decode** | ^4.0.0 | Decoding JWT tokens on the client side |

---

## 📚 Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://react.dev/)
- [Ant Design Documentation](https://ant.design/docs/react/introduce)
