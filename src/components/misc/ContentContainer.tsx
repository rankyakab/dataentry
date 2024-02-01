import React from "react"

type ContentContainerProp = {
	children?: React.ReactNode
}
export default function ContentContainer({ children }: ContentContainerProp) {
	return <div className="container mx-auto px-4 py-2 relative">{children}</div>
}
