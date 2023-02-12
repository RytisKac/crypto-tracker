import React from 'react';
import styles from './DataContainer.module.scss';

interface Props {
	children: React.ReactNode;
}

const DataContainer = ({ children }: Props) => {
	return <div>{children}</div>;
};

export default DataContainer;
