import React from 'react';
import '../../JobListing.css'; // 确保引入了 CSS 样式文件

const Item = ({job}) => {
    // 定义 applyToJob 函数，用于处理申请工作的逻辑
    const applyToJob = (jobId) => {
        // 逻辑处理申请工作
        console.log(`Applying to job with id: ${jobId}`);
        // 可能是调用 API 或更新状态等
    };
    return (
        <div>
            <div>
                <div />
                <div className="bg-white rounded-md">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://careers.adobe.com/us/en/job/ADOBUSR143085EXTERNALENUS/Software-Development-Engineer"
                        className="block relative"
                    >
                        <div className="flex flex-col items-center  sm:block md:flex lg:hidden text-sm text-left my-2">
                            <div className="w-full p-3 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-between items-center">
                                    <h2 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                        Adobe
                                    </h2>
                                    <div className="text-right">
                <span className="px-3 py-1 rounded-full text-xs bg-green-200 text-green-800">
                  today
                </span>
                                    </div>
                                </div>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Software Development Engineer
                                </p>
                                <button className="bg-black text-white px-3 py-1 rounded-full inline-block text-xs">
                                    Apply now
                                </button>
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://careers.adobe.com/us/en/job/ADOBUSR143085EXTERNALENUS/Software-Development-Engineer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="hidden lg:block p-4 my-2 rounded-md shadow">
                            <div className="sm:flex items-center items-start text-sm justify-start ">
                                <div className="flex-none no-underline" style={{ width: "2%" }}>
                                    {" "}
                                    <div className="w-fit" data-testid="flowbite-tooltip-target">
                <span className="px-1.5 py-0.5 rounded text-xs text-gray-700">
                  🌟
                </span>
                                    </div>
                                    <div
                                        data-testid="flowbite-tooltip"
                                        tabIndex={-1}
                                        className="absolute inline-block z-10 rounded-lg py-2 px-3 font-medium shadow-sm transition-opacity duration-300 invisible opacity-0 border border-gray-200 bg-white text-gray-900 text-xs"
                                        id=":r8:"
                                        role="tooltip"
                                        style={{
                                            position: "absolute",
                                            top: "1003.19px",
                                            left: "416.86px"
                                        }}
                                    >
                                        <div className="relative z-20">This is a new job for you.</div>
                                        <div
                                            className="absolute z-10 h-2 w-2 rotate-45 bg-white"
                                            data-testid="flowbite-tooltip-arrow"
                                            style={{ bottom: "-4px", left: "79.5px" }}
                                        >
                                            &nbsp;
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: "15%" }}>
              <span className="text-left ">
                <h2 className="ml-1 font-semibold text-base text-black">
                  <span style={{ paddingLeft: 8 }}>Adobe</span>
                </h2>
              </span>
                                </div>
                                <div className="flex text-left flex-grow truncate w-1/2 ">
                                    <p className="underline text-blue-600">
                                        Software Development Engineer
                                    </p>{" "}
                                </div>
                                <div style={{ width: "8%" }}>
              <span
                  className="text-left

   text-xs font-medium mr-2 px-1.5 py-0.5 rounded bg-green-100 text-green-800"
              >
                ✓
              </span>
                                </div>
                                <div className="flex-none " style={{ width: "5%" }}>
              <span className="text-xs font-medium mr-2 px-1.5 py-0.5 rounded bg-yellow-200 text-yellow-800">
                5
              </span>
                                </div>
                                <div
                                    className="flex justify-center items-center "
                                    style={{ width: "10%" }}
                                >
                                    <div
                                        className="react-card-flip"
                                        style={{ perspective: 1000, zIndex: "auto" }}
                                    >
                                        <div
                                            className="react-card-flipper"
                                            style={{
                                                height: "100%",
                                                position: "relative",
                                                width: "100%"
                                            }}
                                        >
                                            <div
                                                className="react-card-front"
                                                style={{
                                                    backfaceVisibility: "hidden",
                                                    height: "100%",
                                                    left: 0,
                                                    position: "relative",
                                                    top: 0,
                                                    transform: "rotateY(0deg)",
                                                    transformStyle: "preserve-3d",
                                                    transition: "all 0.6s ease 0s",
                                                    width: "100%",
                                                    zIndex: 2
                                                }}
                                            >
                                                <div>
                      <span className="px-1.5 py-0.5 rounded text-xs bg-green-200 text-green-800">
                        today
                      </span>
                                                </div>
                                            </div>
                                            <div
                                                className="react-card-back"
                                                style={{
                                                    backfaceVisibility: "hidden",
                                                    height: "100%",
                                                    left: 0,
                                                    position: "absolute",
                                                    top: 0,
                                                    transform: "rotateY(-180deg)",
                                                    transformStyle: "preserve-3d",
                                                    transition: "all 0.6s ease 0s",
                                                    width: "100%"
                                                }}
                                            >
                                                <div>
                                                    <div className="flex justify-center items-center px-2.5 py-0.5 rounded text-xs  bg-green-200 text-green-800">
                                                        Jan 17
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none no-underline" style={{ width: "10%" }}>
                                    <div>
                                        <div />
                                        <div className="flex items-center justify-center space-x-1">
                                            <div className="w-fit" data-testid="flowbite-tooltip-target">
                                                <div className="flex items-center">
                                                    <input
                                                        id="apply-checkbox"
                                                        type="checkbox"
                                                        className="w-4 h-4 text-gray-500 bg-gray-100 hover:bg-gray-300 rounded outline-none focus:ring-0 focus:ring-blue-500"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-testid="flowbite-tooltip"
                                                tabIndex={-1}
                                                className="absolute inline-block z-10 rounded-lg py-2 px-3 font-medium shadow-sm transition-opacity duration-300 invisible opacity-0 border border-gray-200 bg-white text-gray-900 text-xs"
                                                id=":ra:"
                                                role="tooltip"
                                                style={{
                                                    position: "absolute",
                                                    top: "1038.19px",
                                                    left: "1307.53px"
                                                }}
                                            >
                                                <div className="relative z-20">Mark as applied</div>
                                                <div
                                                    className="absolute z-10 h-2 w-2 rotate-45 bg-white"
                                                    data-testid="flowbite-tooltip-arrow"
                                                    style={{ left: "-4px", top: 12 }}
                                                >
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: "2%" }}>
                                    <div className="relative inline-block text-left ">
                                        <button className="ml-3 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-white rounded p-1">
                                            <svg
                                                className="w-3 h-3 text-gray-800 dark:text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 4 15"
                                            >
                                                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <div />
                </div>
            </div>
        </div>
    );
};

export default Item;
