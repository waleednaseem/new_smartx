import React from 'react'

export default function AccordionsStep({ x, i }) {
    return (
        <div key={i} className="rounded-t-lg border bg-white">
            <h2 className="mb-0" id={`heading${i}`}>
                <button
                    className="group relative flex w-full items-center rounded-t-[15px] bg-white py-4 px-5 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] "
                    type="button"
                    data-te-collapse-init
                    data-te-target={`#collapse${i}`}
                    aria-expanded="true"
                    aria-controls={`collapse${i}`}
                >
                    {x.heading}
                    <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none ">
                        <svg
                            // xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </span>
                </button>
            </h2>
            <div
                id={`collapse${i}`}
                className="!visible flex items-center text-center p-5 md:ml-10"
                data-te-collapse-item
                data-te-collapse-show
                aria-labelledby={`heading${i}`}
            >
                {x.paragraph}
            </div>
        </div>
    )
}
