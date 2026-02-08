
export const SunIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const MoonIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
)

export const HamburgerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

export const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const RefreshIcon = () => (
  <>
    {/* <img width="24" height="24" src="https://img.icons8.com/sf-black/64/recurring-appointment.png" alt="recurring-appointment"/> */}

    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
      <path d="M20.172,7.288c-0.397-0.566-1.179-0.699-1.742-0.303c-0.564,0.397-0.7,1.177-0.303,1.742	c0.886,1.259,1.354,2.743,1.354,4.29c0,4.116-3.35,7.465-7.466,7.465s-7.465-3.349-7.465-7.465c0-4.015,3.187-7.29,7.162-7.451	l-0.288,0.247C10.9,6.262,10.84,7.051,11.289,7.575c0.247,0.289,0.598,0.437,0.95,0.437c0.287,0,0.577-0.099,0.812-0.301	l2.798-2.397c0.257-0.22,0.413-0.535,0.435-0.873c0.021-0.338-0.097-0.669-0.325-0.919l-2.802-3.066	c-0.468-0.511-1.259-0.545-1.766-0.08c-0.51,0.466-0.546,1.256-0.08,1.766l0.835,0.914c-0.044-0.001-0.088-0.005-0.131-0.005	c-5.495,0-9.965,4.471-9.965,9.966s4.47,9.965,9.965,9.965s9.966-4.47,9.966-9.965C21.981,10.951,21.355,8.971,20.172,7.288z"></path>
    </svg>
  </>
);

// icon for LINK, not used currently
/* export const LinkIcon = () => {
  <img width="24" height="24" src="https://img.icons8.com/glyph-neue/64/link.png" alt="link"/>
} */

export const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

export const EditIcon = () => (
  <>
   {/*  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 50 50">
      <path d="M31.979 13.686l4.336 4.336-21.29 21.29-4.914 1.644c-.658.22-1.285-.407-1.065-1.065l1.644-4.914L31.979 13.686zM32.686 12.979l3.539-3.539c.586-.586 1.536-.586 2.121 0l2.214 2.214c.586.586.586 1.536 0 2.121l-3.539 3.539L32.686 12.979z"></path>
    </svg> */}
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 72 72">
<path d="M38.406 22.234l11.36 11.36L28.784 54.576l-12.876 4.307c-1.725.577-3.367-1.065-2.791-2.79l4.307-12.876L38.406 22.234zM41.234 19.406l5.234-5.234c1.562-1.562 4.095-1.562 5.657 0l5.703 5.703c1.562 1.562 1.562 4.095 0 5.657l-5.234 5.234L41.234 19.406z"></path>
</svg>
  </>
);

export const CheckCircleIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-500">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export const AttemptedCircleIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-yellow-500">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

export const UnsolvedCircleIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-500">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>
);

export const StatusIcon = ({ status }) => {
  switch (status) {
    case 'solved':
      return <CheckCircleIcon />
    case 'attempted':
      return <AttemptedCircleIcon />
    case 'unsolved':
    default:
      return <UnsolvedCircleIcon />
  }
}