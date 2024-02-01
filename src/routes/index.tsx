import DataCollection from "@Ranky/pages/DataCollection/DataCollection"
import DependentInformation from "@Ranky/pages/DataCollection/DependentInformation"
import EducationalInfo from "@Ranky/pages/DataCollection/EducationalInfo"
import EmploymentInfo from "@Ranky/pages/DataCollection/EmploymentInfo"
import MedicalInformation from "@Ranky/pages/DataCollection/MedicalInformation"
import UploadDataPage from "@Ranky/pages/DataCollection/UploadData"
import Dashboard from "@Ranky/pages/dashboard/Dashboard"
import Login from "@Ranky/pages/login/Login"
import NotificationPage from "@Ranky/pages/settings/Notification"
import ProfilePage from "@Ranky/pages/settings/Profile"
import SettingsPage from "@Ranky/pages/settings/Settings"
import TaskboardPage from "@Ranky/pages/task/Taskboard"
import TasksPage from "@Ranky/pages/task/Tasks"
import TeamPage from "@Ranky/pages/team/Team"
import { createBrowserRouter } from "react-router-dom"

export const AppRoutes = createBrowserRouter([
	{
		path: "/",
		element: <Login />
	},
	{
		path: "/login",
		element: <Login />
	},
	{
		path: "/dashboard",
		element: <Dashboard />
	},

	{
		path: "/data-collection",
		element: <DataCollection />
	},
	{
		path: "/employment-info",
		element: <EmploymentInfo />
	},
	{
		path: "/educational-info",
		element: <EducationalInfo />
	},
	{
		path: "/dependent-info",
		element: <DependentInformation />
	},{
		path: "/medical-info",
		element: <MedicalInformation />
	},
	{
		path: "/upload-data",
		element: <UploadDataPage />
	},
	{
		path: "/notification",
		element: <NotificationPage />
	},
	{
		path: "/settings",
		element: <SettingsPage />
	},
	{
		path: "/profile",
		element: <ProfilePage />
	},
	{
		path: "/team",
		element: <TeamPage />
	},
	{
		path: "/task",
		element: <TasksPage />
	},
	{
		path: "/my-task",
		element: <TaskboardPage />
	}
])
