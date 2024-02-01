import React from "react"
import Layout from "../layout/Layout"
import ContentContainer from "./ContentContainer"
import { Link } from "react-router-dom"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"

type PageContainerProps = {
	goBackUrl: string
	children?: React.ReactNode
}
export default function PageContainer({ goBackUrl, children }: PageContainerProps) {
	return (
		<Layout>
			<ContentContainer>
				<div className="">
					<Link to={goBackUrl} className="flex gap-2 text-slate-800">
						<ArrowLeftIcon className="0" width={24} height={24} /> <span>Back</span>
					</Link>
				</div>

				{children}
			</ContentContainer>
		</Layout>
	)
}
