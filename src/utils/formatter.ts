export function formatCurrency(amount: number) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(amount);
}

export function formatPercentage(amount: number) {
	return new Intl.NumberFormat('default', {
		style: 'percent',
		minimumFractionDigits: 1,
		maximumFractionDigits: 1,
	}).format(amount / 100);
}

export function formatNumber(amount: number) {
	return new Intl.NumberFormat().format(amount);
}
