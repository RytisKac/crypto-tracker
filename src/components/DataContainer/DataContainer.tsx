import React from 'react';

interface Props {
	children: React.ReactNode;
}

const DataContainer = ({ children }: Props) => {
	return <div>{children}</div>;
};

export default DataContainer;
