/**
 * WordPress dependencies
 */
const { _x } = wp.i18n;

const svgs = {
	emergencyHome: {
		label: _x( 'Emergency Home', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				width="48"
				viewBox="0 0 48 48"
			>
				<path d="M26.1 43.6q-.85.85-2.1.85t-2.1-.85L4.4 26.1q-.85-.85-.85-2.1t.85-2.1L21.9 4.4q.85-.85 2.1-.85t2.1.85l17.5 17.5q.85.85.85 2.1t-.85 2.1ZM24 41.45 41.45 24 24 6.55 6.55 24 24 41.45ZM22.5 26h3V14h-3Zm1.5 5.5q.6 0 1.05-.45.45-.45.45-1.05 0-.6-.45-1.05-.45-.45-1.05-.45-.6 0-1.05.45-.45.45-.45 1.05 0 .6.45 1.05.45.45 1.05.45Zm0-7.5Z" />
			</svg>
		),
	},
	settingsAlert: {
		label: _x( 'Settings Alert', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				width="48"
				viewBox="0 0 48 48"
			>
				<path d="m19.4 44-1-6.3q-.95-.35-2-.95t-1.85-1.25l-5.9 2.7L4 30l5.4-3.95q-.1-.45-.125-1.025Q9.25 24.45 9.25 24q0-.45.025-1.025T9.4 21.95L4 18l4.65-8.2 5.9 2.7q.8-.65 1.85-1.25t2-.9l1-6.35h9.2l1 6.3q.95.35 2.025.925Q32.7 11.8 33.45 12.5l5.9-2.7L44 18l-5.4 3.85q.1.5.125 1.075.025.575.025 1.075t-.025 1.05q-.025.55-.125 1.05L44 30l-4.65 8.2-5.9-2.7q-.8.65-1.825 1.275-1.025.625-2.025.925l-1 6.3Zm2.4-3h4.4l.7-5.6q1.65-.4 3.125-1.25T32.7 32.1l5.3 2.3 2-3.6-4.7-3.45q.2-.85.325-1.675.125-.825.125-1.675 0-.85-.1-1.675-.1-.825-.35-1.675L40 17.2l-2-3.6-5.3 2.3q-1.15-1.3-2.6-2.175-1.45-.875-3.2-1.125L26.2 7h-4.4l-.7 5.6q-1.7.35-3.175 1.2-1.475.85-2.625 2.1L10 13.6l-2 3.6 4.7 3.45q-.2.85-.325 1.675-.125.825-.125 1.675 0 .85.125 1.675.125.825.325 1.675L8 30.8l2 3.6 5.3-2.3q1.2 1.2 2.675 2.05Q19.45 35 21.1 35.4Zm2.2-9.5q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q24.65 28.5 24 28.5q-.65 0-1.075.425Q22.5 29.35 22.5 30q0 .65.425 1.075.425.425 1.075.425ZM22.5 26h3V16h-3Zm1.5-2Z" />
			</svg>
		),
	},
	nearbyError: {
		label: _x( 'Nearby Error', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				width="48"
				viewBox="0 0 48 48"
			>
				<path d="M40.75 37.35V20.2h3v17.15Zm1.5 7q-.7 0-1.225-.525Q40.5 43.3 40.5 42.6q0-.7.525-1.225.525-.525 1.225-.525.7 0 1.225.525Q44 41.9 44 42.6q0 .7-.525 1.225-.525.525-1.225.525ZM24 43.85q-.55 0-1.1-.25t-1-.65L5.05 26.1q-.4-.45-.625-1.025Q4.2 24.5 4.2 23.95q0-.6.225-1.15.225-.55.625-.95l16.9-16.9q.45-.45 1-.65t1.1-.2q.55 0 1.1.2t.95.65L37.75 16.6v5.5L24 8.35 8.35 24 24 39.65 37.75 25.9v5.45l-11.6 11.6q-.45.45-1.025.675-.575.225-1.125.225Zm0-8.7L12.85 24 24 12.85 35.15 24Z" />
			</svg>
		),
	},
	circleNotifications: {
		label: _x( 'Circle Notifications', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				width="48"
				viewBox="0 0 48 48"
			>
				<path d="M24 37.2q1.15 0 1.975-.85.825-.85.825-2h-5.65q0 1.15.85 2 .85.85 2 .85Zm-9.7-5.85h19.35v-3h-2V22.6q0-3.05-1.575-5.55T25.65 14v-1.5q0-.7-.475-1.175Q24.7 10.85 24 10.85q-.7 0-1.2.475t-.5 1.175V14q-2.85.55-4.425 2.95-1.575 2.4-1.575 5.35v6.05h-2ZM24 44q-4.25 0-7.9-1.525-3.65-1.525-6.35-4.225-2.7-2.7-4.225-6.35Q4 28.25 4 24q0-4.2 1.525-7.85Q7.05 12.5 9.75 9.8q2.7-2.7 6.35-4.25Q19.75 4 24 4q4.2 0 7.85 1.55Q35.5 7.1 38.2 9.8q2.7 2.7 4.25 6.35Q44 19.8 44 24q0 4.25-1.55 7.9-1.55 3.65-4.25 6.35-2.7 2.7-6.35 4.225Q28.2 44 24 44Zm0-3q7.25 0 12.125-4.875T41 24q0-7.25-4.875-12.125T24 7q-7.25 0-12.125 4.875T7 24q0 7.25 4.875 12.125T24 41Zm-4.7-12.65V22q0-2.05 1.325-3.475Q21.95 17.1 24 17.1t3.35 1.425q1.3 1.425 1.3 3.475v6.35ZM24 24Z" />
			</svg>
		),
	},
	exclamation: {
		label: _x( 'Exclamation', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				width="48"
				viewBox="0 0 48 48"
			>
				<path d="M22.5 29V10h3v19Zm0 9v-3h3v3Z" />
			</svg>
		),
	},
	notificationImportant: {
		label: _x( 'Notification Important', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				width="48"
				viewBox="0 0 48 48"
			>
				<path d="M22.5 26.6h3V16h-3ZM24 32q.7 0 1.175-.475.475-.475.475-1.175 0-.7-.475-1.175Q24.7 28.7 24 28.7q-.7 0-1.175.475-.475.475-.475 1.175 0 .7.475 1.175Q23.3 32 24 32ZM8 38v-3h4.2V19.7q0-4.2 2.475-7.475Q17.15 8.95 21.2 8.1V6.65q0-1.15.825-1.9T24 4q1.15 0 1.975.75.825.75.825 1.9V8.1q4.05.85 6.55 4.125t2.5 7.475V35H40v3Zm16-14.75ZM24 44q-1.6 0-2.8-1.175Q20 41.65 20 40h8q0 1.65-1.175 2.825Q25.65 44 24 44Zm-8.8-9h17.65V19.7q0-3.7-2.55-6.3-2.55-2.6-6.25-2.6t-6.275 2.6Q15.2 16 15.2 19.7Z" />
			</svg>
		),
	},
	report: {
		label: _x( 'Report', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				width="48"
				viewBox="0 0 48 48"
			>
				<path d="M24 33.95q.7 0 1.225-.525.525-.525.525-1.225 0-.7-.525-1.225Q24.7 30.45 24 30.45q-.7 0-1.225.525-.525.525-.525 1.225 0 .7.525 1.225.525.525 1.225.525Zm-1.5-7.2h3V13.6h-3ZM16.5 42 6 31.5v-15L16.5 6h15L42 16.5v15L31.5 42Zm1.25-3h12.5L39 30.25v-12.5L30.25 9h-12.5L9 17.75v12.5ZM24 24Z" />
			</svg>
		),
	},
	highPriority: {
		label: _x( 'High Priority', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				width="48"
				viewBox="0 0 48 48"
			>
				<path d="M24 42q-1.45 0-2.475-1.025Q20.5 39.95 20.5 38.5q0-1.45 1.025-2.475Q22.55 35 24 35q1.45 0 2.475 1.025Q27.5 37.05 27.5 38.5q0 1.45-1.025 2.475Q25.45 42 24 42Zm-3.5-12V6h7v24Z" />
			</svg>
		),
	},
	campaign: {
		label: _x( 'Campaign', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				width="48"
				viewBox="0 0 48 48"
			>
				<path d="M36.5 25.5v-3H44v3ZM39 40l-6.05-4.5 1.8-2.4 6.05 4.5Zm-4.1-25.15-1.8-2.4L39 8l1.8 2.4ZM10.5 38v-8H7q-1.25 0-2.125-.875T4 27v-6q0-1.25.875-2.125T7 18h9l10-6v24l-10-6h-2.5v8ZM28 30.7V17.3q1.35 1.2 2.175 2.925Q31 21.95 31 24t-.825 3.775Q29.35 29.5 28 30.7ZM7 21v6h9.8l6.2 3.7V17.3L16.8 21Zm8 3Z" />
			</svg>
		),
	},
	notificationsActive: {
		label: _x( 'Notifications Active', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				width="48"
				viewBox="0 0 48 48"
			>
				<path d="M6.2 19.65q0-4.05 1.7-7.675T12.75 5.8l2.05 2.25q-2.65 2.15-4.125 5.175T9.2 19.65Zm32.65 0q0-3.4-1.4-6.425T33.4 8.05l2.05-2.25q3.1 2.6 4.75 6.2t1.65 7.65ZM8 38v-3h4.2V19.7q0-4.2 2.475-7.475Q17.15 8.95 21.2 8.1V6.65q0-1.15.825-1.9T24 4q1.15 0 1.975.75.825.75.825 1.9V8.1q4.05.85 6.55 4.125t2.5 7.475V35H40v3Zm16-14.75ZM24 44q-1.6 0-2.8-1.175Q20 41.65 20 40h8q0 1.65-1.175 2.825Q25.65 44 24 44Zm-8.8-9h17.65V19.7q0-3.7-2.55-6.3-2.55-2.6-6.25-2.6t-6.275 2.6Q15.2 16 15.2 19.7Z" />
			</svg>
		),
	},
	error: {
		label: _x( 'Error', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				width="48"
				viewBox="0 0 48 48"
			>
				<path d="M24 34q.7 0 1.175-.475.475-.475.475-1.175 0-.7-.475-1.175Q24.7 30.7 24 30.7q-.7 0-1.175.475-.475.475-.475 1.175 0 .7.475 1.175Q23.3 34 24 34Zm-1.35-7.65h3V13.7h-3ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z" />
			</svg>
		),
	},
	warning: {
		label: _x( 'Warning', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				width="48"
				viewBox="0 0 48 48"
			>
				<path d="M2 42 24 4l22 38Zm5.2-3h33.6L24 10Zm17-2.85q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425Q22.7 34 22.7 34.65q0 .65.425 1.075.425.425 1.075.425Zm-1.5-5.55h3V19.4h-3Zm1.3-6.1Z" />
			</svg>
		),
	},
	info: {
		label: _x( 'Info', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				width="48"
				viewBox="0 0 48 48"
			>
				<path d="M22.65 34h3V22h-3ZM24 18.3q.7 0 1.175-.45.475-.45.475-1.15t-.475-1.2Q24.7 15 24 15q-.7 0-1.175.5-.475.5-.475 1.2t.475 1.15q.475.45 1.175.45ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z" />
			</svg>
		),
	},
};

export default svgs;
