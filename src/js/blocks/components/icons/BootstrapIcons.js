/**
 * WordPress dependencies
 */
const { _x } = wp.i18n;

const BootstrapIcons = {
	check: {
		label: _x( 'Check', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-check"
				viewBox="0 0 16 16"
			>
				<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
			</svg>
		),
	},
	checkCircle: {
		label: _x( 'Check Circle', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-check-circle"
				viewBox="0 0 16 16"
			>
				<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
				<path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
			</svg>
		),
	},
	checkCircleFilled: {
		label: _x( 'Check Circle Filled', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-check-circle-fill"
				viewBox="0 0 16 16"
			>
				<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
			</svg>
		),
	},
	checkLarge: {
		label: _x( 'Check Large', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-check-lg"
				viewBox="0 0 16 16"
			>
				<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
			</svg>
		),
	},
	checkSquare: {
		label: _x( 'Check Square', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-check-square"
				viewBox="0 0 16 16"
			>
				<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
				<path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
			</svg>
		),
	},
	checkSquareFill: {
		label: _x( 'Check Square Filled', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-check-square-fill"
				viewBox="0 0 16 16"
			>
				<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
			</svg>
		),
	},
	circleSlash: {
		label: _x( 'Circle Slash', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-slash-circle"
				viewBox="0 0 16 16"
			>
				<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
				<path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z" />
			</svg>
		),
	},
	dashCircle: {
		label: _x( 'Dash Circle', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-dash-circle"
				viewBox="0 0 16 16"
			>
				<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
				<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
			</svg>
		),
	},
	dashCircleFilled: {
		label: _x( 'Dash Circle Filled', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-dash-circle-fill"
				viewBox="0 0 16 16"
			>
				<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
			</svg>
		),
	},
	exclamation: {
		label: _x( 'Exclamation', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-exclamation"
				viewBox="0 0 16 16"
			>
				<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
			</svg>
		),
	},
	exclamationCircle: {
		label: _x( 'Exclamation Circle', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-exclamation-circle"
				viewBox="0 0 16 16"
			>
				<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
				<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
			</svg>
		),
	},
	exclamationCircleFilled: {
		label: _x( 'Exclamation Circle Filled', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-exclamation-circle-fill"
				viewBox="0 0 16 16"
			>
				<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
			</svg>
		),
	},
	exclamationDiamond: {
		label: _x( 'Exclamation Diamond', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-exclamation-diamond"
				viewBox="0 0 16 16"
			>
				<path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
				<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
			</svg>
		),
	},
	exclamationDiamondFilled: {
		label: _x( 'Exclamation Diamond Filled', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-exclamation-diamond-fill"
				viewBox="0 0 16 16"
			>
				<path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
			</svg>
		),
	},
	exclamationOctagon: {
		label: _x( 'Exclamation Octagon', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-exclamation-octagon"
				viewBox="0 0 16 16"
			>
				<path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
				<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
			</svg>
		),
	},
	exclamationOctagonFilled: {
		label: _x( 'Exclamation Octagon Filled', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-exclamation-octagon-fill"
				viewBox="0 0 16 16"
			>
				<path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
			</svg>
		),
	},
	exclamationSquare: {
		label: _x( 'Exclamation Square', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-exclamation-square"
				viewBox="0 0 16 16"
			>
				<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
				<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
			</svg>
		),
	},
	exclamationSquareFilled: {
		label: _x( 'Exclamation Square Filled', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-exclamation-square-fill"
				viewBox="0 0 16 16"
			>
				<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
			</svg>
		),
	},
	exclamationTriangle: {
		label: _x( 'Exclamation Triangle', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-exclamation-triangle"
				viewBox="0 0 16 16"
			>
				<path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
				<path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
			</svg>
		),
	},
	exclamationTriangleFilled: {
		label: _x( 'Settings', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-exclamation-triangle-fill"
				viewBox="0 0 16 16"
			>
				<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
			</svg>
		),
	},
	info: {
		label: _x( 'Info', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-info"
				viewBox="0 0 16 16"
			>
				<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
			</svg>
		),
	},
	infoCircle: {
		label: _x( 'Info Circle', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-info-circle"
				viewBox="0 0 16 16"
			>
				<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
				<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
			</svg>
		),
	},
	infoCircleFill: {
		label: _x( 'Info Circle Filled', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-info-circle-fill"
				viewBox="0 0 16 16"
			>
				<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
			</svg>
		),
	},
	infoSquare: {
		label: _x( 'Info Square', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-info-square"
				viewBox="0 0 16 16"
			>
				<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
				<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
			</svg>
		),
	},
	infoSquareFilled: {
		label: _x( 'Info Square Filled', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-info-square-fill"
				viewBox="0 0 16 16"
			>
				<path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
			</svg>
		),
	},
	questionCircle: {
		label: _x( 'Question Circle', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-question-circle"
				viewBox="0 0 16 16"
			>
				<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
				<path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
			</svg>
		),
	},
	questionDiamond: {
		label: _x( 'Question Diamond', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-question-diamond"
				viewBox="0 0 16 16"
			>
				<path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
				<path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
			</svg>
		),
	},
	questionDiamondFill: {
		label: _x( 'Question Diamond Filled', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-question-diamond-fill"
				viewBox="0 0 16 16"
			>
				<path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM5.495 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z" />
			</svg>
		),
	},
	questionCircleFill: {
		label: _x( 'Question Circle Filled', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-question-circle-fill"
				viewBox="0 0 16 16"
			>
				<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
			</svg>
		),
	},
	questionLarge: {
		label: _x( 'Question Large', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-question-lg"
				viewBox="0 0 16 16"
			>
				<path
					fillRule="evenodd"
					d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z"
				/>
			</svg>
		),
	},
	questionSquare: {
		label: _x( 'Question Square', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-question-square"
				viewBox="0 0 16 16"
			>
				<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
				<path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
			</svg>
		),
	},
	questionSquareFill: {
		label: _x( 'Question Square Filled', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-question-square-fill"
				viewBox="0 0 16 16"
			>
				<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z" />
			</svg>
		),
	},
	radioactive: {
		label: _x( 'Radioactive', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-radioactive"
				viewBox="0 0 16 16"
			>
				<path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z" />
				<path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
			</svg>
		),
	},
	lightbulb: {
		label: _x( 'Lightbulb', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-lightbulb"
				viewBox="0 0 16 16"
			>
				<path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
			</svg>
		),
	},
	lightbulbFilled: {
		label: _x( 'Lightbulb Filled', 'label', 'alerts-dlx' ),
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				className="bi bi-lightbulb-fill"
				viewBox="0 0 16 16"
			>
				<path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
			</svg>
		),
	},
	faExclamationRound: {
		label: _x( 'Exclamation Round', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="exclamation-circle"
				className="svg-inline--fa fa-exclamation-circle fa-w-16"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M256 8C119 8 8 119.08 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 376a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm38.24-238.41l-12.8 128A16 16 0 0 1 265.52 288h-19a16 16 0 0 1-15.92-14.41l-12.8-128A16 16 0 0 1 233.68 128h44.64a16 16 0 0 1 15.92 17.59z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M278.32 128h-44.64a16 16 0 0 0-15.92 17.59l12.8 128A16 16 0 0 0 246.48 288h19a16 16 0 0 0 15.92-14.41l12.8-128A16 16 0 0 0 278.32 128zM256 320a32 32 0 1 0 32 32 32 32 0 0 0-32-32z"
					></path>
				</g>
			</svg>
		),
	},
	faExclamationSquare: {
		label: _x( 'Exclamation Square', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="exclamation-square"
				className="svg-inline--fa fa-exclamation-square fa-w-14"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zM224 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm38.24-238.41l-12.8 128A16 16 0 0 1 233.52 288h-19a16 16 0 0 1-15.92-14.41l-12.8-128A16 16 0 0 1 201.68 128h44.64a16 16 0 0 1 15.92 17.59z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M246.32 128h-44.64a16 16 0 0 0-15.92 17.59l12.8 128A16 16 0 0 0 214.48 288h19a16 16 0 0 0 15.92-14.41l12.8-128A16 16 0 0 0 246.32 128zM224 320a32 32 0 1 0 32 32 32 32 0 0 0-32-32z"
					></path>
				</g>
			</svg>
		),
	},
	faExclamation: {
		label: _x( 'Exclamation', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="exclamation"
				className="svg-inline--fa fa-exclamation fa-w-6"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 192 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M96 512a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M49.22 0h93.56a24 24 0 0 1 24 25.2l-13.63 272a24 24 0 0 1-24 22.8H62.84a24 24 0 0 1-24-22.8l-13.59-272A24 24 0 0 1 49.22 0z"
					></path>
				</g>
			</svg>
		),
	},
	bells: {
		label: _x( 'Bells', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="bells"
				className="svg-inline--fa fa-bells fa-w-20"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 640 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M117.3 119.08c-.8 2.1-14.7 40.5-15.4 42.71-29.2 80.31-66.4 94.55-87.4 105.28C-5.6 277.4-5 307.78 17.5 316l243.3 88.84c8.4-19.25 19.5-45.72-3.3-108.49L242 253.57c-27.9-76.91 5-161 73.7-200.34a130.82 130.82 0 0 0-27.4-14.17c-69.25-25.19-145.77 10.62-171 80.02zM543.77 411L428.1 453a63.76 63.76 0 0 0 115.67-42z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M137.85 444.14a63.73 63.73 0 0 0 73.83-23.2L96.23 378.83a63.78 63.78 0 0 0 41.62 65.31zM625.55 299c-21-10.73-58.33-25-87.44-105.28-.8-2.2-14.7-40.61-15.4-42.72C497.4 81.63 420.88 45.84 351.64 71.1s-104.92 102-79.73 171.37c.8 2.11 14.81 40.52 15.61 42.72 29.21 80.32 9.7 115.22.5 137-8.8 20.76 11.21 43.72 33.72 35.5L622.45 348c20.55-7.55 24.9-37.74 3.1-49z"
					></path>
				</g>
			</svg>
		),
	},
	alarmExclamation: {
		label: _x( 'Alarm Exclamation', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="alarm-exclamation"
				className="svg-inline--fa fa-alarm-exclamation fa-w-16"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M434.55 422a223.27 223.27 0 0 0 44.61-134c0-123.71-99.9-224-223.14-224S32.88 164.29 32.88 288a223.27 223.27 0 0 0 44.61 134l-39.95 40.06a16.05 16.05 0 0 0 0 22.63l22.54 22.62a15.89 15.89 0 0 0 22.54 0l39.94-40.09a221.27 221.27 0 0 0 266.92 0l39.94 40.09a15.89 15.89 0 0 0 22.54 0l22.53-22.62a16 16 0 0 0 0-22.63zM256 416a32 32 0 1 1 31.88-32A31.91 31.91 0 0 1 256 416zm38.05-238.4l-12.75 128a15.91 15.91 0 0 1-15.82 14.4h-18.93a15.92 15.92 0 0 1-15.84-14.4L218 177.6a16 16 0 0 1 15.8-17.6h44.42a15.92 15.92 0 0 1 15.84 17.6z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M1 96a95.11 95.11 0 0 0 15.24 51.26L161.57 25.68A95 95 0 0 0 96.62 0C43.83 0 1 43 1 96zM415.38 0a95.09 95.09 0 0 0-64.93 25.66l145.33 121.57A95.13 95.13 0 0 0 511 96c0-53-42.83-96-95.62-96zM256 352a32 32 0 1 0 31.88 32A31.91 31.91 0 0 0 256 352zm22.21-192H233.8a16 16 0 0 0-15.8 17.6l12.76 128a15.92 15.92 0 0 0 15.79 14.4h18.93a15.91 15.91 0 0 0 15.83-14.4l12.75-128a15.92 15.92 0 0 0-15.84-17.6z"
					></path>
				</g>
			</svg>
		),
	},
	starExclamation: {
		label: _x( 'Star Exclamation', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="star-exclamation"
				className="svg-inline--fa fa-star-exclamation fa-w-18"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 576 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M528.55 171.5l-146.37-21.3-65.43-132.39c-11.72-23.7-45.68-23.8-57.5 0L193.82 150.2 47.45 171.4c-26.25 3.8-36.77 36.1-17.73 54.6l105.9 103-25.05 145.46c-4.51 26.1 23 46 46.49 33.7L288 439.57l130.94 68.69c23.35 12.3 51-7.5 46.49-33.7l-25.05-145.48 105.9-103c19-18.48 8.52-50.78-17.73-54.58zM288 392a40 40 0 1 1 40.07-40A40 40 0 0 1 288 392zm40.17-223.38l-8 112a8 8 0 0 1-8 7.4h-48.11a8 8 0 0 1-8-7.4l-8-112a8 8 0 0 1 7.39-8.58H320.19a8 8 0 0 1 8 8v.63z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M288 312a40 40 0 1 0 40.07 40A40 40 0 0 0 288 312zm32.16-152H256a8 8 0 0 0-8 8v.62l8 112a8 8 0 0 0 8 7.4h48.09a8 8 0 0 0 8-7.4l8-112a8 8 0 0 0-7.39-8.58z"
					></path>
				</g>
			</svg>
		),
	},
	siren: {
		label: _x( 'Siren', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="siren"
				className="svg-inline--fa fa-siren fa-w-14"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M128.21,134.94a8,8,0,0,1,9-6.87l15.86,2.13a8,8,0,0,1,6.87,9L135.82,320H400L375,120.06A64,64,0,0,0,311.5,64h-175A64,64,0,0,0,73,120.06L48,320h55.54Z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M432,352H16A16,16,0,0,0,0,368v64a16,16,0,0,0,16,16H432a16,16,0,0,0,16-16V368A16,16,0,0,0,432,352Z"
					></path>
				</g>
			</svg>
		),
	},
	alarmClock: {
		label: _x( 'Alarm Clock', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="alarm-clock"
				className="svg-inline--fa fa-alarm-clock fa-w-16"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M474.49 462.06L434.55 422a223.25 223.25 0 0 0 44.61-134c0-123.71-99.9-224-223.14-224S32.88 164.29 32.88 288a223.25 223.25 0 0 0 44.61 134l-39.95 40.06a16.05 16.05 0 0 0 0 22.63l22.54 22.62a15.9 15.9 0 0 0 22.47.07l.07-.07 39.94-40.09a221.26 221.26 0 0 0 266.92 0l39.94 40.09a15.9 15.9 0 0 0 22.47.07l.07-.07 22.53-22.62a16 16 0 0 0 0-22.63zM346 355.51l-20 25a16 16 0 0 1-22.49 2.5L239 331.39a40 40 0 0 1-15-31.23V176a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v112.62L343.5 333a16 16 0 0 1 2.5 22.51z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M1 96a95.08 95.08 0 0 0 15.24 51.26L161.57 25.68A95 95 0 0 0 96.62 0C43.83 0 1 43 1 96zm342.5 237L288 288.62V176a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v124.16a40 40 0 0 0 15 31.23L303.51 383a16 16 0 0 0 22.49-2.5l20-25a16 16 0 0 0-2.5-22.5zM415.38 0a95.08 95.08 0 0 0-64.93 25.66l145.33 121.57A95.13 95.13 0 0 0 511 96c0-53-42.83-96-95.62-96z"
					></path>
				</g>
			</svg>
		),
	},
	faInfoSquare: {
		label: _x( 'Info Square', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="info-square"
				className="svg-inline--fa fa-info-square fa-w-14"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-176 86a42 42 0 1 1-42 42 42 42 0 0 1 42-42zm56 254a12 12 0 0 1-12 12h-88a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h12v-64h-12a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12v100h12a12 12 0 0 1 12 12z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M224 202a42 42 0 1 0-42-42 42 42 0 0 0 42 42zm44 134h-12V236a12 12 0 0 0-12-12h-64a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h12v64h-12a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12z"
					></path>
				</g>
			</svg>
		),
	},
	faInfoCircle: {
		label: _x( 'Icon Circle', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="info-circle"
				className="svg-inline--fa fa-info-circle fa-w-16"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M256 8C119 8 8 119.08 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 110a42 42 0 1 1-42 42 42 42 0 0 1 42-42zm56 254a12 12 0 0 1-12 12h-88a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h12v-64h-12a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12v100h12a12 12 0 0 1 12 12z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M256 202a42 42 0 1 0-42-42 42 42 0 0 0 42 42zm44 134h-12V236a12 12 0 0 0-12-12h-64a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h12v64h-12a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12z"
					></path>
				</g>
			</svg>
		),
	},
	faQuestionCircle: {
		label: _x( 'Question Circle', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="question-circle"
				className="svg-inline--fa fa-question-circle fa-w-16"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M256 8C119 8 8 119.08 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 422a46 46 0 1 1 46-46 46.05 46.05 0 0 1-46 46zm40-131.33V300a12 12 0 0 1-12 12h-56a12 12 0 0 1-12-12v-4c0-41.06 31.13-57.47 54.65-70.66 20.17-11.31 32.54-19 32.54-34 0-19.82-25.27-33-45.7-33-27.19 0-39.44 13.14-57.3 35.79a12 12 0 0 1-16.67 2.13L148.82 170a12 12 0 0 1-2.71-16.26C173.4 113 208.16 90 262.66 90c56.34 0 116.53 44 116.53 102 0 77-83.19 78.21-83.19 106.67z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M256 338a46 46 0 1 0 46 46 46 46 0 0 0-46-46zm6.66-248c-54.5 0-89.26 23-116.55 63.76a12 12 0 0 0 2.71 16.24l34.7 26.31a12 12 0 0 0 16.67-2.13c17.86-22.65 30.11-35.79 57.3-35.79 20.43 0 45.7 13.14 45.7 33 0 15-12.37 22.66-32.54 34C247.13 238.53 216 254.94 216 296v4a12 12 0 0 0 12 12h56a12 12 0 0 0 12-12v-1.33c0-28.46 83.19-29.67 83.19-106.67 0-58-60.19-102-116.53-102z"
					></path>
				</g>
			</svg>
		),
	},
	triangleExclamation: {
		label: _x( 'Triangle Exclamation', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="exclamation-triangle"
				className="svg-inline--fa fa-exclamation-triangle fa-w-18"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 576 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M569.52 440L329.58 24c-18.44-32-64.69-32-83.16 0L6.48 440c-18.42 31.94 4.64 72 41.57 72h479.89c36.87 0 60.06-40 41.58-72zM288 448a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm38.24-238.41l-12.8 128A16 16 0 0 1 297.52 352h-19a16 16 0 0 1-15.92-14.41l-12.8-128A16 16 0 0 1 265.68 192h44.64a16 16 0 0 1 15.92 17.59z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M310.32 192h-44.64a16 16 0 0 0-15.92 17.59l12.8 128A16 16 0 0 0 278.48 352h19a16 16 0 0 0 15.92-14.41l12.8-128A16 16 0 0 0 310.32 192zM288 384a32 32 0 1 0 32 32 32 32 0 0 0-32-32z"
					></path>
				</g>
			</svg>
		),
	},
	radiation: {
		label: _x( 'Radiation', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="radiation"
				className="svg-inline--fa fa-radiation fa-w-16"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 496 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M296,255.82a48,48,0,1,1-48-48A48,48,0,0,1,296,255.82Z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M125.23,452c-4.8,7.7-2.4,18.1,5.6,22.4a246.73,246.73,0,0,0,234.36,0c8-4.3,10.4-14.8,5.6-22.4L290.41,323.52a78.67,78.67,0,0,1-84.78,0Zm-109-196.18H167.82c0-28.59,15.2-53.49,37.8-67.69L125.23,59.74c-4.8-7.7-15.3-10.2-22.7-4.8C44.44,96.94,5.14,163.33,0,239.12c-.6,9,7.1,16.7,16.2,16.7Zm312,0H479.79c9.1,0,16.79-7.7,16.2-16.8-5.1-75.79-44.4-142.18-102.49-184.18-7.4-5.3-17.9-2.9-22.7,4.8L290.41,188c22.6,14.3,37.79,39.2,37.79,67.79Z"
					></path>
				</g>
			</svg>
		),
	},
	biohazard: {
		label: _x( 'Biohazard', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="biohazard"
				className="svg-inline--fa fa-biohazard fa-w-18"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 576 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M206 80.83a89.75 89.75 0 0 0 29.5 40.69c16.51-5.7 34-9.5 52.51-9.5s36.2 3.8 52.81 9.6a89.75 89.75 0 0 0 29.5-40.69 207.71 207.71 0 0 0-164.32-.1zm-76.72 205.83a84 84 0 0 0-26.4-4.59 81.46 81.46 0 0 0-22.5 3.1 208.16 208.16 0 0 0 83.31 153.45 91.09 91.09 0 0 0 24.5-42.39 158.72 158.72 0 0 1-58.91-109.57zm343.94-4.59a85.81 85.81 0 0 0-26.6 4.69A158.8 158.8 0 0 1 387.91 396a91.4 91.4 0 0 0 24.5 42.49 207.53 207.53 0 0 0 83-153.45 83.1 83.1 0 0 0-22.19-2.97z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M575.53 283.47c-13.1-39.09-39.5-72-74.1-92.37a162.36 162.36 0 0 0-55.31-19.9c6-17.69 10-36.39 10-56.18a173.9 173.9 0 0 0-41-112.16 7.84 7.84 0 0 0-10-1.8 8.26 8.26 0 0 0-3.6 9.69c4.5 13.8 6.6 26.29 6.6 38.49 0 67.78-53.8 122.86-120 122.86s-120-55.08-120-122.86c0-12.1 2.2-24.69 6.6-38.49a8.26 8.26 0 0 0-3.6-9.69 7.86 7.86 0 0 0-10 1.8 174.49 174.49 0 0 0-41 112.16c0 19.79 3.9 38.49 10 56.18a163.12 163.12 0 0 0-55.31 19.9c-34.6 20.49-61 53.28-74.3 92.37A8.32 8.32 0 0 0 4 293.26a7.82 7.82 0 0 0 10-1.6c9.4-10.79 19-19.09 29.2-25.09 57.31-33.89 130.82-13.69 163.92 45s13.4 134-43.9 167.84c-10.21 6.1-22 10.4-35.81 13.4a8.27 8.27 0 0 0-6.4 8.1 8.07 8.07 0 0 0 6.5 8 163.8 163.8 0 0 0 115.18-19.71c18-10.6 32.91-24.49 45.31-40.09 12.4 15.6 27.3 29.49 45.31 40.09a163.8 163.8 0 0 0 115.21 19.69 8.07 8.07 0 0 0 6.5-8 8.16 8.16 0 0 0-6.4-8.1c-13.9-2.9-25.6-7.3-35.81-13.4-57.3-33.89-77-109.16-43.9-167.84s106.61-78.88 163.92-45c10.2 6.1 19.8 14.3 29.2 25.09a7.82 7.82 0 0 0 10 1.6 8.27 8.27 0 0 0 3.5-9.77zM288 320.05a48 48 0 1 1 48-48 48 48 0 0 1-48 48z"
					></path>
				</g>
			</svg>
		),
	},
	times: {
		label: _x( 'Times', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="times"
				className="svg-inline--fa fa-times fa-w-11"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 352 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M9.21,356.07a31.46,31.46,0,0,0,0,44.48l22.24,22.24a31.46,31.46,0,0,0,44.48,0L176,322.72,109.28,256ZM342.79,111.45,320.55,89.21a31.46,31.46,0,0,0-44.48,0L176,189.28,242.72,256,342.79,155.93a31.46,31.46,0,0,0,0-44.48Z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M342.79,356.07a31.46,31.46,0,0,1,0,44.48l-22.24,22.24a31.46,31.46,0,0,1-44.48,0L9.21,155.93a31.46,31.46,0,0,1,0-44.48L31.45,89.21a31.46,31.46,0,0,1,44.48,0Z"
					></path>
				</g>
			</svg>
		),
	},
	shieldCheck: {
		label: _x( 'Shield Check', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="shield-check"
				className="svg-inline--fa fa-shield-check fa-w-16"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M466.5 83.67l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80A48 48 0 0 0 16 128c0 198.5 114.5 335.69 221.5 380.29a48.15 48.15 0 0 0 36.9 0C360.1 472.58 496 349.27 496 128a48 48 0 0 0-29.5-44.33zm-47.2 114.21l-184 184a16.06 16.06 0 0 1-22.6 0l-104-104a16.07 16.07 0 0 1 0-22.61l22.6-22.6a16.07 16.07 0 0 1 22.6 0l70.1 70.1 150.1-150.1a16.07 16.07 0 0 1 22.6 0l22.6 22.6a15.89 15.89 0 0 1 0 22.61z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M419.3 197.88l-184 184a16.06 16.06 0 0 1-22.6 0l-104-104a16.07 16.07 0 0 1 0-22.61l22.6-22.6a16.07 16.07 0 0 1 22.6 0l70.1 70.1 150.1-150.1a16.07 16.07 0 0 1 22.6 0l22.6 22.6a15.89 15.89 0 0 1 0 22.61z"
					></path>
				</g>
			</svg>
		),
	},
	clipboardCheck: {
		label: _x( 'Clipboard Check', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="clipboard-check"
				className="svg-inline--fa fa-clipboard-check fa-w-12"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 384 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M336 64h-80a64 64 0 0 1 64 64H64a64 64 0 0 1 64-64H48a48 48 0 0 0-48 48v352a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zm-22.8 207.8l-143 141.8a12 12 0 0 1-17-.1l-82.6-83.3a12 12 0 0 1 .1-17L99.1 285a12 12 0 0 1 17 .1l46 46.4 106-105.2a12 12 0 0 1 17 .1l28.2 28.4a12 12 0 0 1-.1 17z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M285.1 226.4a12 12 0 0 0-17-.1l-106 105.2-46-46.4a12 12 0 0 0-17-.1l-28.4 28.2a12 12 0 0 0-.1 17l82.6 83.3a12 12 0 0 0 17 .1l143-141.8a12 12 0 0 0 .1-17zM256 64a64 64 0 0 0-128 0 64 64 0 0 0-64 64h256a64 64 0 0 0-64-64zm-64 24a24 24 0 1 1 24-24 23.94 23.94 0 0 1-24 24z"
					></path>
				</g>
			</svg>
		),
	},
	circleCheck: {
		label: _x( 'Circle Check', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="check-circle"
				className="svg-inline--fa fa-check-circle fa-w-16"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm155.31 195.31l-184 184a16 16 0 0 1-22.62 0l-104-104a16 16 0 0 1 0-22.62l22.62-22.63a16 16 0 0 1 22.63 0L216 308.12l150.06-150.06a16 16 0 0 1 22.63 0l22.62 22.63a16 16 0 0 1 0 22.62z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M227.31 387.31a16 16 0 0 1-22.62 0l-104-104a16 16 0 0 1 0-22.62l22.62-22.63a16 16 0 0 1 22.63 0L216 308.12l150.06-150.06a16 16 0 0 1 22.63 0l22.62 22.63a16 16 0 0 1 0 22.62l-184 184z"
					></path>
				</g>
			</svg>
		),
	},
	squareCheck: {
		label: _x( 'Square Check', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="check-square"
				className="svg-inline--fa fa-check-square fa-w-14"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-20.69 165.94l-184 184a16 16 0 0 1-22.62 0l-104-104a16 16 0 0 1 0-22.63l22.62-22.62a16 16 0 0 1 22.63 0L184 302.75l150.06-150.06a16 16 0 0 1 22.63 0l22.62 22.62a16 16 0 0 1 0 22.63z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M195.31 381.94a16 16 0 0 1-22.62 0l-104-104a16 16 0 0 1 0-22.63l22.62-22.62a16 16 0 0 1 22.63 0L184 302.74l150.06-150a16 16 0 0 1 22.63 0l22.62 22.62a16 16 0 0 1 0 22.63l-184 184z"
					></path>
				</g>
			</svg>
		),
	},
	badgeCheck: {
		label: _x( 'Badge Check', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="badge-check"
				className="svg-inline--fa fa-badge-check fa-w-16"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M512 256a88 88 0 0 0-57.1-82.4A88 88 0 0 0 338.4 57.1a88 88 0 0 0-164.8 0A88 88 0 0 0 57.1 173.6a88 88 0 0 0 0 164.8 88 88 0 0 0 116.5 116.5 88 88 0 0 0 164.8 0 88 88 0 0 0 116.5-116.5A88 88 0 0 0 512 256zm-144.8-44.25l-131 130a11 11 0 0 1-15.55-.06l-75.72-76.33a11 11 0 0 1 .06-15.56L171 224a11 11 0 0 1 15.56.06l42.15 42.49 97.2-96.42a11 11 0 0 1 15.55.06l25.82 26a11 11 0 0 1-.08 15.56z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M367.2 211.75l-131 130a11 11 0 0 1-15.55-.06l-75.72-76.33a11 11 0 0 1 .06-15.56L171 224a11 11 0 0 1 15.56.06l42.15 42.49 97.2-96.42a11 11 0 0 1 15.55.06l25.82 26a11 11 0 0 1-.06 15.56z"
					></path>
				</g>
			</svg>
		),
	},
	faCheck: {
		label: _x( 'Checkmark', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="check"
				className="svg-inline--fa fa-check fa-w-16"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M504.5 144.42L264.75 385.5 192 312.59l240.11-241a25.49 25.49 0 0 1 36.06-.14l.14.14L504.5 108a25.86 25.86 0 0 1 0 36.42z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M264.67 385.59l-54.57 54.87a25.5 25.5 0 0 1-36.06.14l-.14-.14L7.5 273.1a25.84 25.84 0 0 1 0-36.41l36.2-36.41a25.49 25.49 0 0 1 36-.17l.16.17z"
					></path>
				</g>
			</svg>
		),
	},
	doNotEnter: {
		label: _x( 'Do Not Enter', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="do-not-enter"
				className="svg-inline--fa fa-do-not-enter fa-w-16"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 496 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M56,288V224a16,16,0,0,1,16-16H424a16,16,0,0,1,16,16v64a16,16,0,0,1-16,16H72A16,16,0,0,1,56,288Z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M248,8C111,8,0,119,0,256S111,504,248,504,496,393,496,256,385,8,248,8ZM424,304H72a16,16,0,0,1-16-16V224a16,16,0,0,1,16-16H424a16,16,0,0,1,16,16v64A16,16,0,0,1,424,304Z"
					></path>
				</g>
			</svg>
		),
	},
	faInfo: {
		label: _x( 'Info', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="info"
				className="svg-inline--fa fa-info fa-w-6"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 192 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M20 448h152a20 20 0 0 1 20 20v24a20 20 0 0 1-20 20H20a20 20 0 0 1-20-20v-24a20 20 0 0 1 20-20z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M96 128a64 64 0 1 0-64-64 64 64 0 0 0 64 64zm28 64H20a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20h28v192h96V212a20 20 0 0 0-20-20z"
					></path>
				</g>
			</svg>
		),
	},
	question: {
		label: _x( 'Question', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="question"
				className="svg-inline--fa fa-question fa-w-12"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 384 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M182.4,373.5c-38.3,0-69.3,31-69.3,69.3s31,69.3,69.3,69.3c38.3,0,69.3-31,69.3-69.3 C251.7,404.5,220.7,373.5,182.4,373.5z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M367.9,153.6c0,116-125.3,117.8-125.3,160.6v5.8c0,13.3-10.7,24-24,24h-72.5c-13.3,0-24-10.7-24-24v-9.8 c0-61.8,46.9-86.5,82.3-106.4c30.4-17,49-28.6,49-51.2c0-29.8-38-49.6-68.8-49.6c-39.1,0-57.8,18.1-82.8,49.4 c-8.1,10.2-22.9,12-33.3,4.1l-43.1-32.7c-10.3-7.8-12.6-22.3-5.2-32.9C60.9,32.7,112.6,0,192.4,0C277.3,0,367.9,66.3,367.9,153.6z"
					></path>
				</g>
			</svg>
		),
	},
	faQuestionSquare: {
		label: _x( 'Question Square', 'Icon Label', 'mr-alert-blocks' ),
		icon: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="question-square"
				className="svg-inline--fa fa-question-square fa-w-14"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
			>
				<g className="fa-group">
					<path
						className="fa-secondary"
						fill="currentColor"
						d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zM224 430a46 46 0 1 1 46-46 46.06 46.06 0 0 1-46 46zm40-131.33V300a12 12 0 0 1-12 12h-56a12 12 0 0 1-12-12v-4c0-41.06 31.13-57.47 54.65-70.66 20.17-11.31 32.54-19 32.54-34 0-19.81-25.27-33-45.7-33-27.19 0-39.44 13.13-57.3 35.79a12 12 0 0 1-16.67 2.13L116.82 170a12 12 0 0 1-2.71-16.26C141.4 113 176.16 90 230.66 90c56.34 0 116.53 44 116.53 102 0 77-83.19 78.21-83.19 106.67z"
						opacity="0.4"
					></path>
					<path
						className="fa-primary"
						fill="currentColor"
						d="M224 338a46 46 0 1 0 46 46 46.05 46.05 0 0 0-46-46zm6.66-248c-54.5 0-89.26 23-116.55 63.76a12 12 0 0 0 2.71 16.24l34.7 26.31a12 12 0 0 0 16.67-2.13c17.86-22.66 30.11-35.79 57.3-35.79 20.43 0 45.7 13.14 45.7 33 0 15-12.37 22.67-32.54 34C215.13 238.53 184 254.94 184 296v4a12 12 0 0 0 12 12h56a12 12 0 0 0 12-12v-1.33c0-28.46 83.19-29.67 83.19-106.67 0-58-60.19-102-116.53-102z"
					></path>
				</g>
			</svg>
		),
	},
};

export default BootstrapIcons;
