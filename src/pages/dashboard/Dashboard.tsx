import React from "react"
import Cards from "./Cards"
import Layout from "@Ranky/components/layout/Layout"
import DataCollection from "./DataCollection"

export default function Dashboard() {
	return (
		<Layout>
			<Cards />
			<DataCollection />
		</Layout>
	)
}
