import * as React from 'react';

const Bitcoinu = (props: any) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="icon icon-tabler icon-tabler-currency-bitcoin"
		width={30}
		height={30}
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="#8b6ffb"
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M0 0h24v24H0z" stroke="none" />
		<path d="M6 6h8a3 3 0 0 1 0 6 3 3 0 0 1 0 6H6M8 6v12M8 12h6M9 3v3M13 3v3M9 18v3M13 18v3" />
	</svg>
);

export default Bitcoinu;
