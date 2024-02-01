import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
//import {store} from "./store";
import store from "./store"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import "./index.css"
import { AppRoutes } from "./routes/index.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		
		 <Provider store={store}>


		 <RouterProvider router={AppRoutes} />
		 </Provider>
	</React.StrictMode>
)
