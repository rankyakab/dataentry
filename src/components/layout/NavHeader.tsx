import React from "react"
import { Bars3Icon, CloudArrowDownIcon, MapPinIcon, PlusIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"

export default function NavHeader() {
	return (
		<div className="flex gap-8 w-full md:justify-between md:items-center md:flex-row xs:flex-col">
			<div className="flex items-center gap-8">
				<Bars3Icon width={34} height={34} className="cursor-pointer md:hidden xs:inline" />
				<h1 className="text-2xl font-bold p-3 text-blue">Welcome back! Aisha</h1>
			</div>
			<div className="flex items-center gap-3 text-blue">
				<MapPinIcon width={24} height={24} /> <span className="underline">Kubwa, Abuja</span>
			</div>

			<div className="flex gap-4 justify-between xs:flex-col md:flex-row ">
				<button className="rounded-1xl text-sm border-2 border-gray-300 flex items-center gap-3 text-slate-400 focus:outline-none" type="button">
					<CloudArrowDownIcon width={24} height={24} /> Export Report
				</button>

				<button className="rounded-1xl text-sm bg-blue text-slate-200 focus:outline-none" type="button">
					<Link to={"/data-collection"} className="flex items-center gap-3 text-slate-100 hover:text-slate-100">
						<PlusIcon width={24} height={24} /> Add New Data
					</Link>
				</button>
			</div>
		</div>
	)
}
