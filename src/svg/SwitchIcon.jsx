import * as React from "react";

const SvgComponent = props => (
	<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
		<path
			d="M2.667 11.333h10.666zm10.666 0-2.666-2.666zm0 0L10.667 14zm0-6.666H2.667zm-10.666 0L5.333 2zm0 0 2.666 2.666"
			stroke="#000"
			strokeWidth={1.33334}
			strokeLinecap="square"
			fill="none"
		/>
	</svg>
);

export default SvgComponent;
